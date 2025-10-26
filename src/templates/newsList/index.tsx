'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import { newsList } from '../../data/news'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { NewsType } from '@/domain/news'
import Link from 'next/link'
import { Card } from '@/components/Card'

type NewsListProps = {
  max?: number
  isPagination?: boolean
}

export const NewsList = (props: NewsListProps) => {
  const { max = 20, isPagination } = props
  const pageCount = Math.ceil(newsList.length / max)
  const [page, setPage] = useState<number>(1)
  const [displayedItems, setDisplayedItems] = useState<NewsType[]>([])

  const scrollTop = (): number => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  }

  useEffect(() => {
    //表示データを抽出
    setDisplayedItems(newsList.slice((page - 1) * max, page * max))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page)
    setDisplayedItems(newsList.slice((page - 1) * max, page * max))
    scrollTop()
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
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
      {isPagination && (
        <div className='relative h-[50px] my-8'>
          <Pagination
            className='absolute left-1/2 -translate-x-1/2'
            count={pageCount < 1 ? 1 : pageCount}
            onChange={handleChange}
            page={page}
            renderItem={(item) => (
              <PaginationItem slots={{ previous: HiArrowLeft, next: HiArrowRight }} {...item} />
            )}
          />
        </div>
      )}
    </div>
  )
}
