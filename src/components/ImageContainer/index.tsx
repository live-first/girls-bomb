import { PropsWithChildren } from 'react'
import './style.css'
import { ImgType } from '@/domain/img'
import { Img } from '../Image'

type ImageProp = {
  img?: ImgType
  width?: string
  height?: string
  borderRadius?: string
  childrenHeight?: string
}

export const ImageContainer = (props: PropsWithChildren<ImageProp>) => {
  const { children, img, width, height, borderRadius } = props

  return (
    <div
      className='img-area'
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius ? borderRadius : ''}`,
      }}
    >
      {img ? (
        <>
          <Img cName='event-card-back-img' src={img.src} alt={img.alt} />
          <Img cName='event-card-img' src={img.src} alt={img.alt} />
        </>
      ) : (
        <div className='no-image'>No Image</div>
      )}
      {children}
    </div>
  )
}
