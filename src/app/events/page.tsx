import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { NewsListView } from '@/views/newsListView'

export default function News() {
  return (
    <SingleViewLayout header={<HeaderView />} main={<NewsListView />} footer={<FooterView />} />
  )
}
