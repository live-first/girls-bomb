import { PropsWithChildren } from 'react'
import './style.css'

export const HomeView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col gap-4'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-12 pt-8 pb-80 px-1 md:px-6 bg-[#ffffff]'>
      <Section></Section>
    </div>
  )
}
