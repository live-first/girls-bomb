'use client'

import { useNewsApi } from '@/api/newsApi'
import { Heading } from '@/components/Heading'
import { NewsContentsType } from '@/domain/news'
import { NewsList } from '@/templates/newsList'
import { Container } from '@mui/material'

export const NewsListView = () => {
  const { getNews } = useNewsApi()

  const news: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='NEWS' />
      <Container maxWidth='md'>
        <NewsList news={news} />
      </Container>
    </div>
  )
}
