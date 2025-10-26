import YouTube from 'react-youtube'
import './style.css'

type YoutubeProp = {
  videoId: string
}
export const YoutubeContainer = (props: YoutubeProp) => {
  const { videoId } = props
  return <YouTube videoId={videoId} className='video-area' />
}
