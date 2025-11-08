'use client'

import { useQuery } from '@tanstack/react-query'
import { NewsContentsType, NewsType } from '@/domain/news'
import { client } from './microApi'

export const useEventsApi = (id?: string) => {
  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return await client.getList<NewsType>({ endpoint: `news` })
    },
  })

  const contentId = id ?? ''

  const getDetail = useQuery({
    queryKey: ['events', id],
    queryFn: async () => {
      return await client.getListDetail<NewsContentsType>({ endpoint: 'news', contentId })
    },
  })

  return {
    getEvents,
    getDetail,
  }
}
