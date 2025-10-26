'use client'

import { Heading } from '@/components/Heading'
import { videoAll } from '@/data/videoAll'
import { YoutubeContainer } from '@/templates/youtube'

export const VideoView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='VIDEO' />
      <div className='w-full'>
        <div className='grid grid-cols-2 gap-2'>
          {videoAll.map((video, index) => (
            <div key={index} className='w-full'>
              <YoutubeContainer videoId={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
