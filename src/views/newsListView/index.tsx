import { NewsList } from '@/templates/newsList'

export const NewsListView = () => {
  return (
    <div className='flex flex-col py-12'>
      <NewsList isPagination />
    </div>
  )
}
