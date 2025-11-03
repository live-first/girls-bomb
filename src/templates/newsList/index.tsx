'use client'

import React from 'react'
import Link from 'next/link'
import { NewsContentsType } from '@/domain/news'
import { formatDate } from '@/utils/stringUtils'

type NewsListProps = {
  news: NewsContentsType[]
  max?: number
}

export const NewsList = (props: NewsListProps) => {
  const { news, max = news.length } = props

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4'>
        {news?.map((data, index) => {
          return index < max ? (
            <Link href={`/news/${data.id}`} key={index}>
              <div className='border-b border-white p-4 hover:bg-[#0f0f0f]'>
                <div>{formatDate(data.publishedAt, 'YYYY / MM / DD')}</div>
                <div className='text-lg font-bold'>{data.title}</div>
              </div>
            </Link>
          ) : (
            <></>
          )
        })}
      </div>
    </div>
  )
}
