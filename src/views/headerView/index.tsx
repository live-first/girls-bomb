'use client'

import { Img, ImgProps } from '@/components/Image'
import { cn } from '@/components/utils'
import { Header } from '@/templates/header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'

export const HeaderView = ({ url }: { url?: string }) => {
  const image: ImgProps = {
    src: 'https://kurofes-dashin.com/pictures/kurofes-logo.png',
    alt: 'クロフェスロゴ',
  }

  type HeaderCellProps = {
    label: string
    url: string
    active?: boolean
  }

  const HeaderPcCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url, active } = props
    return (
      <button
        className={cn(
          'flex flex-col h-full font-bold  hover:bg-krf-remon p-1 text-krf-pink text-shadow-lg whitespace-nowrap',
          active ? 'bg-krf-remon' : 'hover:cursor-pointer',
        )}
        onClick={() => router.push(url)}
      >
        <span className='h-full self-center'>
          <FaHeart />
        </span>
        {label}
      </button>
    )
  }

  const HeaderSpCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url } = props
    return (
      <button
        className='flex flex-col py-2 gap-1 font-bold items-center rounded-full hover:cursor-pointer bg-white p-1 text-fuchsia-400'
        onClick={() => router.push(url)}
      >
        <div className='flex'>
          <span className='h-full self-center'>
            <FaHeart />
          </span>
          {label}
        </div>
      </button>
    )
  }

  return (
    <Header
      image={image}
      pcView={
        <div className='flex py-1 gap-3 bg-white pl-12 pr-3 rounded-l-full'>
          <HeaderPcCell label='クロフェス' url='/about' active={url === 'about'} />
          <HeaderPcCell label='チケット' url='/ticket' active={url === 'ticket'} />
          <HeaderPcCell label='アーティスト' url='/lineup' active={url === 'lineup'} />
          <HeaderPcCell label='タイムテーブル' url='/timetable' active={url === 'timetable'} />
          <HeaderPcCell label='アクセス' url='/access' active={url === 'access'} />
        </div>
      }
      spView={
        <div className='flex flex-col gap-6 pt-16 px-4'>
          <HeaderSpCell label='クロフェス' url='/about' />
          <HeaderSpCell label='チケット' url='/ticket' />
          <HeaderSpCell label='アーティスト' url='/lineup' />
          <HeaderSpCell label='タイムテーブル' url='/timetable' />
          <HeaderSpCell label='アクセス' url='/access' />
          <div className='flex gap-2 sm:gap-6 px-1 sm:px-6'>
            <Link
              href='https://x.com/kurochan96wawa'
              target='_blank'
              className='flex w-full py-3 bg-krf-blue rounded-4xl justify-center items-center shadow-xl'
            >
              <Img src='https://kurofes-dashin.com/pictures/x-logo.png' alt='' cName='w-10 h-10' />
              <p className='justify-self-center text-md sm:text-4xl font-bold text-krf-pink'>
                クロちゃん
              </p>
            </Link>
            <Link
              href='https://x.com/kurofes_dashin'
              target='_blank'
              className='flex w-full py-3 bg-krf-yellow rounded-4xl justify-center items-center shadow-xl'
            >
              <Img src='https://kurofes-dashin.com/pictures/x-logo.png' alt='' cName='w-10 h-10' />
              <p className='justify-self-center text-md sm:text-4xl font-bold text-krf-pink'>
                イベント公式
              </p>
            </Link>
          </div>
          <div className='flex w-[150px] self-center'>
            <Img src='https://kurofes-dashin.com/pictures/kurofes-logo.png' alt='クロフェスロゴ' />
          </div>
        </div>
      }
    />
  )
}
