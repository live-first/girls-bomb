import './artistBox.css'
import { Img } from '@/components/Image'
import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { ArtistType } from '@/domain/artist'

export const ArtistBox = (props: ArtistType) => {
  const { name, img, day1, day2, day3 } = props

  return (
    <SlideUpAnimation>
      <div className='flex flex-col p-1 md:p-3 bg-panel rounded-sm border border-krf-blue artist-box w-full'>
        <div className='flex flex-co w-full text-center justify-center overflow-hidden relative lg:h-[250px] md:h-[230px] sm:h-[200px] min-[150px]:h-[100px]'>
          <Img
            src={img.toString()}
            alt={name}
            cName='w-full h-full absolute top-0 left-0 object-contain'
          />
        </div>
        <div className='text-krf-blue text-md md:text-xl font-bold text-center h-14'>
          <p className='whitespace-pre-wrap h-full content-center leading-5'>{name}</p>
        </div>
        <div className='tag-area'>
          {day1 ? <span className='day1 bg-day1'>13日</span> : ''}
          {day2 ? <span className='day2 bg-day2'>14日</span> : ''}
          {day3 ? <span className='day3 bg-day3'>15日</span> : ''}
        </div>
      </div>
    </SlideUpAnimation>
  )
}
