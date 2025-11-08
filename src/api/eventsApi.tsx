'use client'

import { useQuery } from '@tanstack/react-query'
import { client } from './microApi'
import { EventContentsType, EventsType } from '@/domain/event'

export const useEventsApi = (id?: string) => {
  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return await client.getList<EventsType>({ endpoint: 'events' })
    },
  })

  const contentId = id ?? ''

  const getDetail = useQuery({
    queryKey: ['events', id],
    queryFn: async () => {
      return await client.getListDetail<EventContentsType>({ endpoint: 'events', contentId })
    },
  })

  return {
    getEvents,
    getDetail,
  }
}
