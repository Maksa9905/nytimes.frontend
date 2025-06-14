export type GetArticlesResponseDTO = {
  response: {
    docs: ArticleDocumentResponse[]
    meta: {
      hits: number
    }
  }
}

export type ArticleDocumentResponse = {
  _id: string
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  source: string
  multimedia: { url: string }[]
  pub_date: string
  headline: {
    main: string
  }
}

export type GetArticlesDTO = {
  month: number
  year: number
}
