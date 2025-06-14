import { TArticle } from '../model/types'
import {
  ArticleContainer,
  ArticleImage,
  ArticleInfo,
  ArticleLink,
  ArticleParagraph,
  ArticleTimestamp,
  ArticleTitle,
} from './Article.styled'

const Article = ({
  imageURL,
  title,
  paragraph,
  timestamp,
  articleURL,
}: TArticle) => {
  if (!imageURL) console.log(imageURL)

  return (
    <ArticleContainer $withoutImage={!imageURL}>
      {imageURL && (
        <ArticleImage src={import.meta.env.VITE_NY_TIME_BASE_URL + imageURL} />
      )}
      <ArticleInfo>
        <ArticleLink href={articleURL}>
          <ArticleTitle>{title}</ArticleTitle>
        </ArticleLink>
        <ArticleParagraph>{paragraph}</ArticleParagraph>
        <ArticleTimestamp dateTime={timestamp}>
          {new Date(timestamp).toLocaleDateString()}
        </ArticleTimestamp>
      </ArticleInfo>
    </ArticleContainer>
  )
}

export default Article
