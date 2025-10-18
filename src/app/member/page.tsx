import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { MemberView } from '@/views/memberView'

export default function Member() {
  return (
    <SingleViewLayout
      header={<HeaderView url='member' />}
      main={<MemberView />}
      footer={<FooterView />}
    />
  )
}
