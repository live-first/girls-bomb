'use client'

import { ReactNode } from 'react'
import './style.css'
// import { Img } from '../components/image'

export type LayoutProps = {
  top?: ReactNode
  header: ReactNode
  main?: ReactNode
  allView?: ReactNode
  footer?: ReactNode
  isOverlay?: boolean
}

export const TopViewLayout = (props: LayoutProps) => {
  const { top, header, main, allView, footer, isOverlay = false } = props

  return (
    <div>
      <header className='fixed w-full h-16 z-50'>{header}</header>
      <main className='relative'>
        <div className='h-16'></div>
        {allView}
        {top && <div className='flex w-full h-full relative'>{top}</div>}
        {isOverlay ? (
          <div className='absolute top-0 left-0 w-full h-full overflow-scroll z-20'>
            <div className='mt-[100vh] bg-stripe'>{main}</div>
          </div>
        ) : (
          <div className='bg-stripe'>{main}</div>
        )}
      </main>
      {footer}
    </div>
  )
}
