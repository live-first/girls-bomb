'use client'

import Link from 'next/link'
import { newsList } from '@/data/news'
import { NotFoundView } from '../notFoundView'
import { Img } from '@/components/Image'

export const NewsDetailView = (props: { id: string | number }) => {
  const { id } = props

  const news = newsList[newsList.findIndex((news) => news.id === Number(id))]

  if (news) {
    return (
      <div className='flex flex-col py-12 px-6'>
        <div className='py-6'>公開日：{news.date}</div>
        <div className='text-4xl font-bold border-b-2 pb-4 border-gray-400'>{news.title}</div>
        <div className='flex flex-col py-24'>
          {news.context.map((text, index) => {
            return text ? <div key={index}>{text}</div> : <br key={index} />
          })}
          {news.urls.map((url, index) => {
            return (
              <div className='url-area' key={index}>
                <div className='url-title'>●{url.title}</div>
                <Link target='_blank' href={url.url}>
                  {url.url}
                </Link>
              </div>
            )
          })}
          <div className='py-6'>
            {news.img.map((img, index) => {
              return (
                <div className='news-img-area' key={index}>
                  <Img src={img.src} alt={img.alt} />
                </div>
              )
            })}
          </div>
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
