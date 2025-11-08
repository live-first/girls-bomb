'use client'

import { Heading } from '@/components/Heading'
import { NewsList } from '@/templates/newsList'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { NewsContentsType } from '@/domain/news'
import { useEventsApi } from '@/api/eventsApi'

export const HomeView = () => {
  const { getEvents } = useEventsApi()
  const news: NewsContentsType[] = getEvents.data
    ? (getEvents.data.contents as unknown as NewsContentsType[])
    : []

  const Section = ({ children }: PropsWithChildren) => {
    return (
      <SlideUpAnimation>
        <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
      </SlideUpAnimation>
    )
  }

  return (
    <div className='flex flex-col gap-32 py-8 justify-center px-1 md:px-6 bg-black'>
      <Section>
        <Heading tag={2} label='NEWS' />
        <Container maxWidth='md'>
          <NewsList max={3} news={news} />
        </Container>
        <Link href='/news'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            VIEW All
          </span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='Schedule' />
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Z2lybHNib21iLmV2ZW50QGdtYWlsLmNvbQ&amp;src=amFwYW5lc2VfX2phQGhvbGlkYXkuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;color=%23D81B60&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0'
          width='800'
          height='600'
        ></iframe>
      </Section>

      <Section>
        <Heading tag={2} label='CONTACT' />
        <div className='flex flex-col gap-4 text-center pt-4'>
          <p>イベント出演のお誘い / 取材 / 仕事依頼 /</p>
          <p>その他のお問い合わせは下記までお願いします。</p>
        </div>
        <Link href='/contact'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            お問い合わせはこちら
          </span>
        </Link>
      </Section>
    </div>
  )
}
