'use client'

import { useQuery } from '@tanstack/react-query'
import { NewsType } from '@/domain/news'
import { client } from './microApi'

export const useNewsApi = (id?: string) => {
  const getNews = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      return await client.getList<NewsType>({ endpoint: `news` })
    },
  })

  const contentId = id ?? ''

  const getDetail = useQuery({
    queryKey: ['news', id],
    queryFn: async () => {
      return await client.getListDetail<NewsType>({ endpoint: 'news', contentId })
    },
  })

  return {
    getNews,
    getDetail,
  }
}
