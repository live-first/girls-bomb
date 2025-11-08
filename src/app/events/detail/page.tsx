import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { NewsDetailView } from '@/views/newsDetailView'
import { Suspense } from 'react'

export default function NewsDetail() {
  return (
    <Suspense fallback={<p>読み込み中...</p>}>
      <SingleViewLayout header={<HeaderView />} main={<NewsDetailView />} footer={<FooterView />} />
    </Suspense>
  )
}
