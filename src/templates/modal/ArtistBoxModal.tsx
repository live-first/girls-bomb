import { ArtistType } from '@/domain/artist.js'
import { ArtistModal } from '../artistModal/artistModal'
import { ArtistBox } from '../artistBox'
import { Modal } from '@/components/Modal'

export const ArtistBoxModal = (props: ArtistType) => {
  return (
    <Modal button={<ArtistBox {...props} />}>
      <ArtistModal {...props} />
    </Modal>
  )
}
