import { useState, useEffect, useCallback } from 'react'
import { useGetArticlesQuery } from '../api/api'
import { TArticleBlock } from '../model/types'
import {
  DEFAULT_MONTH,
  DEFAULT_YEAR,
  POLLING_INTERVAL,
} from '../model/constants'

const getPreviousMonthYear = (month: number, year: number) => {
  if (month === 1) {
    return { month: 12, year: year - 1 }
  }
  return { month: month - 1, year }
}

export const useInfiniteScroll = () => {
  const [loadedPeriods, setLoadedPeriods] = useState<
    Array<{ month: number; year: number }>
  >([{ month: DEFAULT_MONTH, year: DEFAULT_YEAR }])
  const [allData, setAllData] = useState<TArticleBlock[]>([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { data, isLoading, isFetching } = useGetArticlesQuery(
    loadedPeriods[loadedPeriods.length - 1],
    { pollingInterval: POLLING_INTERVAL },
  )

  useEffect(() => {
    if (data && !isFetching) {
      setAllData((prevData) => {
        if (prevData.length === 0) {
          return data
        }

        if (loadedPeriods.length > 1) {
          const hasNewData = data.some(
            (block) =>
              !prevData.some((prevBlock) => prevBlock.title === block.title),
          )

          if (hasNewData) {
            return [...prevData, ...data]
          }
        }

        return prevData
      })
      setIsLoadingMore(false)
    }
  }, [data, isFetching, loadedPeriods])

  const loadNextPeriod = useCallback(() => {
    if (isLoadingMore || isFetching) return

    const lastPeriod = loadedPeriods[loadedPeriods.length - 1]
    const nextPeriod = getPreviousMonthYear(lastPeriod.month, lastPeriod.year)

    setIsLoadingMore(true)
    setLoadedPeriods((prev) => [...prev, nextPeriod])
  }, [loadedPeriods, isLoadingMore, isFetching])

  const handleRowsRendered = useCallback(
    ({ stopIndex }: { stopIndex: number }) => {
      if (allData.length > 0 && stopIndex >= allData.length - 5) {
        loadNextPeriod()
      }
    },
    [allData.length, loadNextPeriod],
  )

  return {
    allData,
    isLoading: isLoading && allData.length === 0,
    isLoadingMore,
    handleRowsRendered,
  }
}
