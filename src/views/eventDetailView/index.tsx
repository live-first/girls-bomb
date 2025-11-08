'use client'

import Link from 'next/link'
import { NotFoundView } from '../notFoundView'
import { formatDate } from '@/utils/stringUtils'
import { useSearchParams } from 'next/navigation'
import { useEventsApi } from '@/api/eventsApi'

export const EventDetailView = () => {
  const id = useSearchParams().get('id')

  const { getDetail } = useEventsApi(id as string | undefined)

  const event = getDetail.data

  if (event) {
    return (
      <div className='flex flex-col py-12 px-6'>
        <div className='py-6'>公開日：{formatDate(event.publishedAt, 'YYYY / MM / DD')}</div>
        <div className='text-4xl font-bold border-b-2 pb-4 border-gray-400'>{event.title}</div>
        <div className='flex flex-col py-24'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${event.context}`,
            }}
          />
        </div>
        <div className='py-12'>
          <Link href='/news' className='text-white'>
            ＜ ホームに戻る
          </Link>
        </div>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
