import { Heading } from '@/components/Heading'
import { PropsWithChildren } from 'react'

export const HomeView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center pb-80 px-1 md:px-6 bg-black'>
      <Section>
        <Heading tag={2} label='Schedule' />
        <iframe
          src='https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=OXVva2M4cmxnMnY0MDV0Z2E2b2dpYTFuaGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2381910B&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0'
          width='1200'
          height='800'
          scrolling='no'
        ></iframe>
      </Section>
    </div>
  )
}
