import { Heading } from '@/components/Heading'

export const MemberView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='MEMBER' />
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'></div>
    </div>
  )
}
