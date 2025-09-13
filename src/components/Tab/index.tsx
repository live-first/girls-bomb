'use client'

import { cn } from '../utils'
import { ReactNode, useState, PropsWithChildren } from 'react'
import './tab.css'

const Header = ({ className, children }: PropsWithChildren<TabCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const Content = ({ className, children }: PropsWithChildren<TabCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

type TabCommon = {
  className?: string
}

export type TabProps = {
  Header?: typeof Header
  Content?: typeof Content
  headers: ReactNode[]
  contents: ReactNode[]
  current?: number
  onChange?: () => void
}

const Tab = (props: TabProps) => {
  const { headers, contents, current } = props
  const [tab, setTab] = useState<number>(current ?? 0)

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full tab-header z-10'>
        {headers?.map((header, index) => {
          return (
            <button
              className={cn(
                'py-2',
                index === tab ? 'bg-krf-blue' : 'bg-white',
                `wd-${headers.length}`,
              )}
              id={`${index}`}
              onClick={(e) => {
                setTab(Number(e.currentTarget.id))
              }}
              key={index}
            >
              {header}
            </button>
          )
        })}
      </div>
      <div className='mt-6'>
        {contents.map((content, index) => (
          <div key={index} className={cn(tab === index ? 'show' : 'hidden')}>
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}

Tab.Header = Header
Tab.Content = Content

export default Tab
