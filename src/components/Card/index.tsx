import { Img, ImgProps } from '../Image'

type CardProps = {
  date: string
  title: string
  src?: string
  hideImage?: boolean
} & Omit<ImgProps, 'src'>

export const Card = (props: CardProps) => {
  const { date, title, src, alt, hideImage = false } = props
  return (
    <div className='flex flex-col pb-1 border-1 rounded-3xl shadow-xl hover:-translate-y-1'>
      {hideImage ? (
        <></>
      ) : (
        <div className='w-full h-[200px]'>
          <Img src={src ?? ''} alt={alt} cName='' />
        </div>
      )}
      <div className='flex flex-col h-[55px] px-1'>
        <div className='text-sm'>{date}</div>
        <div className='leading-4.5 text-overflow-2'>{title}</div>
      </div>
    </div>
  )
}
