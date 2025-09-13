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
      <div className='flex flex-col bg-white py-12 px-6'>
        <div className='text-4xl font-bold border-b-2 border-gray-400'>{news.title}</div>
        <div className='py-2'>公開日：{news.date}</div>
        <div className='flex flex-col py-12'>
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
          <Link href='/news' className='text-fuchsia-400 hover:text-amber-300'>
            ＜ ニュース一覧に戻る
          </Link>
        </div>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
