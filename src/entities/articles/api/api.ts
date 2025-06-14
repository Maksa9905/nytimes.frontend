import { createApi } from '@reduxjs/toolkit/query/react'
import { GetArticlesDTO, GetArticlesResponseDTO } from './types'
import { baseQueryWithApiKey } from './middleware'
import { mapArticles, mapArticlesByDays } from '../model/mappers'
import { TArticleBlock } from '../model/types'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: baseQueryWithApiKey,
  endpoints: (build) => ({
    getArticles: build.query<TArticleBlock[], GetArticlesDTO>({
      query: ({ month, year }) => `/${year}/${month}`,
      transformResponse: (response: GetArticlesResponseDTO) => {
        const mappedArticles = response.response.docs.map(mapArticles).reverse()
        return mapArticlesByDays(mappedArticles)
      },
    }),
  }),
})

export const { useGetArticlesQuery } = articlesApi
