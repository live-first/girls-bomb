import { Img } from '@/components/Image'
import './artistModal.css'
import Link from 'next/link'
import { ArtistType } from '@/domain/artist'

export const ArtistModal = (props: ArtistType) => {
  const { img, name, x } = props
  return (
    <div>
      <div>
        <Img src={img as string} alt={name} />
      </div>
      <div className='text-krf-blue text-md md:text-xl font-bold text-center h-14'>
        <p className='whitespace-pre-wrap h-full content-center leading-5'>{name}</p>
      </div>
      <div className='concept'>{/* {artistData.concept} */}</div>
      <div className='flex gap-4 justify-center'>
        {x !== '' && (
          <Link href={`${x}`} target='_blank' className='w-6'>
            <Img src='https://yosen2025.sekigahara-idolwars.net/picture/x-logo.png' alt='x' />
          </Link>
        )}
      </div>
    </div>
  )
}
