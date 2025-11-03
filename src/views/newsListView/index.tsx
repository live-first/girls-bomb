import { Heading } from '@/components/Heading'
import { NewsList } from '@/templates/newsList'

export const NewsListView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='NEWS' />
      <NewsList />
    </div>
  )
}
