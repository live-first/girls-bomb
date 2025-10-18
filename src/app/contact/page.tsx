import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Contact() {
  return (
    <SingleViewLayout
      header={<HeaderView url='contact' />}
      main={<></>}
      footer={<FooterView />}
    />
  )
}
