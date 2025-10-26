import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { VideoView } from '@/views/videoView'

export default function Video() {
  return (
    <SingleViewLayout
      header={<HeaderView url='video' />}
      main={<VideoView />}
      footer={<FooterView />}
    />
  )
}
