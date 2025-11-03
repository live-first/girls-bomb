'use client'

import Link from 'next/link'
import { NotFoundView } from '../notFoundView'
import { useNewsApi } from '@/api/newsApi'

export const NewsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const { getDetail } = useNewsApi(id.toString())

  const news = getDetail.data

  if (news) {
    return (
      <div className='flex flex-col py-12 px-6'>
        <div className='py-6'>公開日：{news.publishedAt}</div>
        <div className='text-4xl font-bold border-b-2 pb-4 border-gray-400'>{news.title}</div>
        <div className='flex flex-col py-24'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${news.contents}`,
            }}
          />
        </div>
        <div className='py-12'>
          <Link href='/news' className='text-white'>
            ＜ ニュース一覧に戻る
          </Link>
        </div>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
