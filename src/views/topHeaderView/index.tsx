import { Img } from '@/components/Image'
import topImage from '@/image/top_image.png'

export const TopHeaderView = () => {
  return (
    <div className='w-full'>
      <Img src={topImage.src} alt='Girls Bomb!!' />
    </div>
  )
}
