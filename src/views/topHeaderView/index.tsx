import { Img } from '@/components/Image'
import topImage from '@/image/ワンダーウィード天.jpg'

export const TopHeaderView = () => {
  return (
    <div className='w-full'>
      <Img src={topImage.src} alt='ワンダーウィード 天' />
    </div>
  )
}
