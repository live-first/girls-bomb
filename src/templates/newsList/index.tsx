'use client'

import React, { useState } from 'react'
import { NewsType } from '@/domain/news'
import Link from 'next/link'
import { Card } from '@/components/Card'

type NewsListProps = {
  max?: number
  isPagination?: boolean
}

export const NewsList = (props: NewsListProps) => {
  const { isPagination } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayedItems, setDisplayedItems] = useState<NewsType[]>([])

  return (
    <div className=''>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
        {displayedItems.map((data, index) => {
          return (
            <Link href={`/news/${data.id}`} key={index}>
              <Card
                date={data.date}
                title={data.title}
                src={data.img[0].src}
                alt={data.img[0].alt}
              />
            </Link>
          )
        })}
      </div>
      {isPagination && <div className='relative h-[50px] my-8'></div>}
    </div>
  )
}
