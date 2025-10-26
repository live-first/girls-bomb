'use client'

import { Heading } from '@/components/Heading'
import { homeVideo } from '@/data/homeVideo'
import { NewsList } from '@/templates/newsList'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import YouTube from 'react-youtube'
import hane_kotomi from '@/image/羽根ことみ.jpg'
import kosaka_kurumi from '@/image/神坂くるみ.jpg'
import sendo_suzuka from '@/image/千堂すずか.jpg'
import nakajo_airi from '@/image/中條あいり.jpg'
import shinonome_shiori from '@/image/東雲しおり.jpg'
import shirakawa_yumeka from '@/image/白川ゆめか.jpg'
import arisu_nanase from '@/image/有栖ななせ.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Img } from '@/components/Image'

export const HomeView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-32 py-8 justify-center px-1 md:px-6 bg-black'>
      <Section>
        <Heading tag={2} label='NEWS' />
        <NewsList max={3} />
        <Link href='/news'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            VIEW All
          </span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='Schedule' />
        <iframe
          src='https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=OXVva2M4cmxnMnY0MDV0Z2E2b2dpYTFuaGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2381910B&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0'
          width='1200'
          height='800'
          scrolling='no'
        ></iframe>
      </Section>
      <Section>
        <Heading tag={2} label='VIDEO' />
        <div className='flex gap-4 w-full overflow-scroll'>
          {homeVideo.map((video, index) => (
            <YouTube videoId={video} key={index} />
          ))}
        </div>
        <Link href='/video'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            VIEW All
          </span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='MEMBER' />
        <div className='flex w-full'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{ clickable: false, el: '#pagination' }}
            mousewheel={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 3.3,
                spaceBetween: 30,
              },
              1800: {
                slidesPerView: 4.3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <Img src={shirakawa_yumeka.src} alt='白川ゆめか' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={shinonome_shiori.src} alt='東雲しおり' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={sendo_suzuka.src} alt='千堂すずか' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={kosaka_kurumi.src} alt='神坂くるみ' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={nakajo_airi.src} alt='中條あいり' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={hane_kotomi.src} alt='羽根ことみ' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={arisu_nanase.src} alt='有栖ななせ' />
            </SwiperSlide>
          </Swiper>
        </div>
        <Link href='/member'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            VIEW All
          </span>
        </Link>
      </Section>
    </div>
  )
}
