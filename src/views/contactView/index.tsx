'use client'

import { Heading } from '@/components/Heading'
import { Container } from '@mui/material'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const ContactView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-10'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='CONTACT' />
      <Container maxWidth='md'>
        <div className='flex flex-col gap-14'>
          <Section>
            <Heading tag={3} label='お仕事のご依頼' />
            <div className='flex justify-center items-center'>
              <Link href='https://lime-light.tv/contact/'>
                <span className='flex px-20 py-4 border bg-black hover:bg-white hover:text-black hover:border'>
                  こちらから
                </span>
              </Link>
            </div>
          </Section>
          <Section>
            <Heading tag={3} label='ファンレター宛先' />
            <div className='flex justify-center items-center'>
              <p>〒101-0021 東京都千代田区外神田3-7-12 AKIHABARA CROSS (メンバー名)宛</p>
            </div>
          </Section>
        </div>
      </Container>
    </div>
  )
}
