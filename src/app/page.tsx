import { TopViewLayout } from '@/layouts/TopViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { HomeView } from '@/views/homeView'
import { TopHeaderView } from '@/views/topHeaderView'

export default function Home() {
  return (
    <TopViewLayout
      header={<HeaderView url='home' />}
      top={<TopHeaderView />}
      main={<HomeView />}
      footer={<FooterView />}
    />
  )
}
