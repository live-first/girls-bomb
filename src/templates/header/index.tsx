'use client'

import { ReactNode, useEffect, useState } from 'react'
import './style.css'
import { cn } from '@/components/utils'
import Link from 'next/link'

export type HeaderProps = {
  logoArea: ReactNode
  pcView: ReactNode
  spView: ReactNode
}

export const Header = (props: HeaderProps) => {
  const [isShow, setShow] = useState<boolean>(false)
  const { logoArea, pcView, spView } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 80) // 上部50px以内なら "上部" と判断
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期チェック

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn('flex w-full h-full pl-3 justify-between items-center')}>
      <Link href='/' className='h-full'>
        {logoArea}
      </Link>
      <div className='hidden md:flex'>{pcView}</div>
      <button
        className={cn(
          'flex flex-col md:hidden hamburger-menu items-center mr-3',
          isShow ? 'active' : '',
        )}
        id='menu01'
        onClick={() => setShow(!isShow)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isShow ? (
        <div className='absolute top-0 left-0 w-dvw h-dvh md:hidden overflow-scroll pb-4'>
          {spView}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
