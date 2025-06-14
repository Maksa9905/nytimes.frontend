import {
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized/dist/commonjs/CellMeasurer'
import { ListRowProps } from 'react-virtualized'
import ArticlesBlock from './ArticlesBlock'
import { Footer } from '#/widgets/Footer'
import { Loader } from '#/shared/ui'
import { TArticleBlock } from '../model/types'

type VirtualizedRowProps = ListRowProps & {
  allData: TArticleBlock[]
  isLoadingMore: boolean
  cache: CellMeasurerCache
}

export const VirtualizedRow = ({
  index,
  key,
  style,
  parent,
  allData,
  isLoadingMore,
  cache,
}: VirtualizedRowProps) => {
  if (!allData || allData.length === 0) return null

  const isLastRow = index === allData.length

  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      {({ measure, registerChild }) => (
        <div
          ref={registerChild}
          style={style}
          onLoad={measure}
        >
          {isLastRow ? (
            isLoadingMore ? (
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <Loader />
              </div>
            ) : (
              <Footer />
            )
          ) : (
            allData[index] && (
              <ArticlesBlock
                title={allData[index].title}
                articles={allData[index].articles}
              />
            )
          )}
        </div>
      )}
    </CellMeasurer>
  )
}
