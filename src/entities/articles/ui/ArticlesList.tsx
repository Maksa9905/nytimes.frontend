import { Loader } from '#/shared/ui'
import { useCallback, useEffect, useMemo } from 'react'
import { List, ListRowRenderer } from 'react-virtualized'
import { CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer'
import { AutoSizer } from 'react-virtualized'
import {
  CELL_MEASURE_CACHE_DEFAULT_HEIGHT,
  CELL_MEASURE_CACHE_MIN_HEIGHT,
} from '../model/constants'
import { ArticlesListContainer } from './Article.styled'
import { useInfiniteScroll } from '../hooks'
import { VirtualizedRow } from './VirtualizedRow'

const cache = new CellMeasurerCache({
  fixedWidth: false,
  defaultHeight: CELL_MEASURE_CACHE_DEFAULT_HEIGHT,
  minHeight: CELL_MEASURE_CACHE_MIN_HEIGHT,
})

const ArticlesList = () => {
  const { allData, isLoading, isLoadingMore, handleRowsRendered } =
    useInfiniteScroll()

  useEffect(() => {
    if (allData.length > 0) {
      cache.clearAll()
    }
  }, [allData])

  const rowRenderer = useCallback<ListRowRenderer>(
    (props) => (
      <VirtualizedRow
        {...props}
        allData={allData}
        isLoadingMore={isLoadingMore}
        cache={cache}
      />
    ),
    [allData, isLoadingMore],
  )

  const totalRowCount = useMemo(() => allData.length + 1, [allData.length])

  if (isLoading) return <Loader />

  return (
    <ArticlesListContainer>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={totalRowCount}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            deferredMeasurementCache={cache}
            overscanRowCount={5}
            onRowsRendered={handleRowsRendered}
          />
        )}
      </AutoSizer>
    </ArticlesListContainer>
  )
}

export default ArticlesList
