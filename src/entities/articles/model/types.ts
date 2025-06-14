export type TArticle = {
  id: string
  imageURL: string | null
  title: string
  paragraph: string
  timestamp: string
  articleURL: string
}

export type TArticleBlock = {
  title: string
  articles: TArticle[]
}
