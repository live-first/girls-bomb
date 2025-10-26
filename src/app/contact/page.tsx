import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { ContactView } from '@/views/contactView'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Contact() {
  return (
    <SingleViewLayout
      header={<HeaderView url='contact' />}
      main={<ContactView />}
      footer={<FooterView />}
    />
  )
}
