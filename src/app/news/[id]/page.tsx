import { newsList } from '@/data/news'
import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { NewsDetailView } from '@/views/newsDetailView'

export async function generateStaticParams() {
  return newsList.map((news) => ({
    id: news.contents.id,
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NewsDetail = (props: { params: any }) => {
  const { params } = props
  return (
    <SingleViewLayout
      header={<HeaderView />}
      main={<NewsDetailView id={params?.id} />}
      footer={<FooterView />}
    />
  )
}

export default NewsDetail
