import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
})

export const baseQueryWithApiKey: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const apiKey = import.meta.env.VITE_NY_TIMES_API_KEY

  let modifiedArgs = args

  if (typeof args === 'string') {
    const url = new URL(args, 'http://localhost')
    if (apiKey) {
      url.searchParams.set('api-key', apiKey)
    }
    modifiedArgs = url.pathname + '.json' + url.search
  } else if (args.url) {
    const url = new URL(args.url, 'http://localhost')
    if (apiKey) {
      url.searchParams.set('api-key', apiKey)
    }
    modifiedArgs = {
      ...args,
      url: url.pathname + '.json' + url.search,
    }
  }

  return baseQuery(modifiedArgs, api, extraOptions)
}
