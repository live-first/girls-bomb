import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { GroupProfileView } from '@/views/groupProfileView'
import { HeaderView } from '@/views/headerView'

export default function GroupProfile() {
  return (
    <SingleViewLayout
      header={<HeaderView url='group-profile' />}
      main={<GroupProfileView />}
      footer={<FooterView />}
    />
  )
}
