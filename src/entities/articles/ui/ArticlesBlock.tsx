import { TArticle } from '../model/types'
import Article from './Article'
import {
  ArticlesBlockContainer,
  ArticlesBlockList,
  ArticlesBlockTitle,
} from './Article.styled'

type ArticlesBlockProps = {
  title: string
  articles: TArticle[]
}

const ArticlesBlock = ({ title, articles }: ArticlesBlockProps) => {
  return (
    <ArticlesBlockContainer>
      <ArticlesBlockTitle>{title}</ArticlesBlockTitle>
      <ArticlesBlockList>
        {articles.map((article) => (
          <Article {...article} />
        ))}
      </ArticlesBlockList>
    </ArticlesBlockContainer>
  )
}

export default ArticlesBlock
