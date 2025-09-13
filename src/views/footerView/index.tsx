import { Img } from '@/components/Image'
import { Footer } from '@/templates/footer'
import Link from 'next/link'

export const FooterView = () => {
  const Bottom = () => {
    return (
      <div className='flex w-full'>
        <Img src='https://kurofes-dashin.com/pictures/2025/people.png' alt='フッター' />
      </div>
    )
  }
  return (
    <Footer bottom={<Bottom />} copyright='クロフェス実行委員会'>
      <div className='flex flex-col items-center pt-3 gap-4'>
        <div className='w-[200px]'>
          <Img src='https://kurofes-dashin.com/pictures/kurofes-logo.png' alt='クロフェスロゴ' />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6'>
          <Link href='/' className='flex h-full text-krf-pink hover:text-krf-blue'>
            トップページ
          </Link>
          <Link href='/news' className='flex h-full text-krf-pink hover:text-krf-blue'>
            お知らせ
          </Link>
          <Link href='/local_idol' className='flex h-full text-krf-pink hover:text-krf-blue'>
            ご当地アイドル
          </Link>
          <Link href='/about' className='flex h-full text-krf-pink hover:text-krf-blue'>
            クロフェスとは
          </Link>
          <Link href='/ticket' className='flex h-full text-krf-pink hover:text-krf-blue'>
            チケット
          </Link>
          <Link href='/lineup' className='flex h-full text-krf-pink hover:text-krf-blue'>
            アーティスト
          </Link>
          <Link href='/timetable' className='flex h-full text-krf-pink hover:text-krf-blue'>
            タイムテーブル
          </Link>
          <Link href='/access' className='flex h-full text-krf-pink hover:text-krf-blue'>
            アクセス
          </Link>
        </div>
      </div>
    </Footer>
  )
}
