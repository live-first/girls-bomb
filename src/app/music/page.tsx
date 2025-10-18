import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Music() {
  return (
    <SingleViewLayout header={<HeaderView url='music' />} main={<></>} footer={<FooterView />} />
  )
}
