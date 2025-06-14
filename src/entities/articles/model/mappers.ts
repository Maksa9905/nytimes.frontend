import { ArticleDocumentResponse } from '../api/types'
import { TArticle, TArticleBlock } from './types'

export const mapArticles = (document: ArticleDocumentResponse): TArticle => ({
  id: document._id,
  title: document.abstract || document.headline.main,
  paragraph: document.lead_paragraph,
  articleURL: document.web_url,
  imageURL: document.multimedia[0]?.url || null,
  timestamp: document.pub_date,
})

export const mapArticlesByDays = (articles: TArticle[]): TArticleBlock[] => {
  const articlesByDate = articles.reduce((acc, article) => {
    const date = new Date(article.timestamp).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    if (!acc[date]) {
      acc[date] = []
    }

    acc[date].push(article)
    return acc
  }, {} as Record<string, TArticle[]>)

  return Object.entries(articlesByDate).map(([date, articles]) => ({
    title: `News for ${date}`,
    articles,
  }))
}
