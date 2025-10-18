import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Member() {
  return (
    <SingleViewLayout header={<HeaderView url='member' />} main={<></>} footer={<FooterView />} />
  )
}
