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
import x_logo from '@/image/X.svg'
import tiktok_logo from '@/image/TikTok.svg'
import youtube_logo from '@/image/Youtube.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Img } from '@/components/Image'
import { Container } from '@mui/material'
import SlideUpAnimation from '@/components/animation/slideUpAnimation'

export const HomeView = () => {
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
          width='100%'
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
              <Link href='/member#白川ゆめか'>
                <Img src={shirakawa_yumeka.src} alt='白川ゆめか' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#東雲しおり'>
                <Img src={shinonome_shiori.src} alt='東雲しおり' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#千堂すずか'>
                <Img src={sendo_suzuka.src} alt='千堂すずか' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#神坂くるみ'>
                <Img src={kosaka_kurumi.src} alt='神坂くるみ' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#中條あいり'>
                <Img src={nakajo_airi.src} alt='中條あいり' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#羽根ことみ'>
                <Img src={hane_kotomi.src} alt='羽根ことみ' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#有栖ななせ'>
                <Img src={arisu_nanase.src} alt='有栖ななせ' />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link href='/member'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            VIEW All
          </span>
        </Link>
      </Section>
      <Section>
        <Heading tag={2} label='SNS' />
        <Container maxWidth='sm'>
          <div className='flex justify-center content-center gap-12'>
            <Link href='https://x.com/wonder__weed' className='w-1/6'>
              <Img src={x_logo.src} alt='x-logo' />
            </Link>
            {/* <Link href='' className='w-1/3'>
            <Img src={insta_logo.src} alt='insta-logo' />
          </Link> */}
            <Link href='https://www.tiktok.com/@wonderweedten_official' className='w-1/6'>
              <Img src={tiktok_logo.src} alt='tiktok-logo' />
            </Link>
            <Link
              href='https://youtube.com/@wonderweedten_official?si=63f0jF1x_idz0O2K'
              className='w-1/6'
            >
              <Img src={youtube_logo.src} alt='youtube-logo' />
            </Link>
          </div>
        </Container>
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
