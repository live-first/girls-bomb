import { Heading } from '@/components/Heading'
import { PropsWithChildren } from 'react'
import topImage from '@/image/ワンダーウィード天.jpg'
import { Img } from '@/components/Image'
import { Container } from '@mui/material'

export const GroupProfileView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center pb-40 px-1 md:px-6 bg-black'>
      <Container maxWidth='md'>
        <Img src={topImage.src} alt='ワンダーウィード 天' />
        <Section>
          <Heading tag={2} label='ワンダーウィード 天' />
          <div>
            <p className='text-xl'>「カッコかわいい」ガールズユニット。</p>
            <p className='text-xl'>バンドサウンドにこだわったJ-ROCK、 J-POP中心の楽曲。</p>
            <p className='text-xl'>’’奇跡の雑草’’の「ワンダーウィード天」</p>
          </div>
        </Section>
      </Container>
    </div>
  )
}
