'use client'

import { Img } from '@/components/Image'
import { cn } from '@/components/utils'
import { Header } from '@/templates/header'
import { useRouter } from 'next/navigation'
import logo from '@/image/ワンダーウィード天ロゴ.jpg'
import x_logo from '@/image/X.svg'
import tiktok_logo from '@/image/TikTok.svg'
import youtube_logo from '@/image/Youtube.png'
import Link from 'next/link'

export const HeaderView = ({ url }: { url?: string }) => {
  const Logo = () => {
    return (
      <Img src={logo.src} cName='h-full object-contain object-left' style={{ width: undefined }} />
    )
  }

  type HeaderCellProps = {
    label: string
    url: string
    active?: boolean
    isBorder?: boolean
  }

  const HeaderPcCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url, active, isBorder = false } = props
    return (
      <button
        className={cn(
          'flex flex-col h-full font-bold  hover:text-[#ca9b52] py-1 px-4 text-krf-pink text-shadow-lg whitespace-nowrap',
          active ? 'text-[#ca9b52]' : 'hover:cursor-pointer',
          isBorder ? 'border-r border-white' : '',
        )}
        onClick={() => router.push(url)}
      >
        {label}
      </button>
    )
  }

  const HeaderSpCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url } = props
    return (
      <button
        className='flex flex-col py-2 gap-1 font-bold items-center hover:cursor-pointer'
        onClick={() => router.push(url)}
      >
        <div className='flex'>{label}</div>
      </button>
    )
  }

  return (
    <Header
      logoArea={<Logo />}
      pcView={
        <div className='flex py-1 pl-12 pr-3 rounded-l-full'>
          <HeaderPcCell label='HOME' url='/' active={url === 'home'} isBorder />
          <HeaderPcCell
            label='GROUP PROFILE'
            url='/group-profile'
            active={url === 'group-profile'}
            isBorder
          />
          <HeaderPcCell label='MEMBER' url='/member' active={url === 'member'} isBorder />
          <HeaderPcCell label='VIDEO' url='/video' active={url === 'video'} isBorder />
          <HeaderPcCell label='CONTACT' url='/contact' active={url === 'contact'} />
        </div>
      }
      spView={
        <div className='flex flex-col gap-6 pt-16 px-4'>
          <HeaderSpCell label='HOME' url='/' />
          <HeaderSpCell label='GROUP PROFILE' url='/group-profile' />
          <HeaderSpCell label='MEMBER' url='/member' />
          <HeaderSpCell label='VIDEO' url='/video' />
          <HeaderSpCell label='CONTACT' url='/contact' />
          <Img src={logo.src} />
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
        </div>
      }
    />
  )
}
