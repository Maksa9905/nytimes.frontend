import styled from 'styled-components'

export const ArticleContainer = styled.article<{ $withoutImage: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.grey.light};

  &:last-child {
    border-bottom: none;
  }
`

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ArticleImage = styled.img`
  width: 100px;
  max-height: 120px;
  grid-row-start: 2;
  grid-row-end: 4;
`

export const ArticleLink = styled.a`
  text-decoration: none;
  grid-row: 1;
  grid-column: 2;

  &:focus-within {
    border: none;
    outline: none;
  }
`

export const ArticleTitle = styled.h3`
  font-weight: 900;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.blue.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ArticleParagraph = styled.p`
  font-size: 16px;
  line-height: 22px;
  grid-row: 2;
  grid-column: 2;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ArticleTimestamp = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.common.grey.dark};
  grid-row: 3;
  grid-column: 2;
`

export const ArticlesBlockContainer = styled.section`
  padding: 0 20px;
`

export const ArticlesBlockTitle = styled.h2`
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  margin: 16px 0px;
`

export const ArticlesBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ArticlesListContainer = styled.div`
  height: calc(100vh - ${({ theme }) => theme.headerHeight}px);
`
