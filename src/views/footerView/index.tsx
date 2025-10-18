import { Footer } from '@/templates/footer'
import { SlArrowUpCircle } from 'react-icons/sl'

export const FooterView = () => {
  const Bottom = () => {
    return (
      <div className='fixed right-4 bottom-6 w-6 h-6'>
        <SlArrowUpCircle width={20} height={20
          
        } />
      </div>
    )
  }
  return (
    <Footer
      bottom={<Bottom />}
      copyright='Copyright © 2025 ワンダーウィード 天 公式サイト All Rights Reserved.'
    >
      <div className='flex flex-col items-center pt-3 gap-4'></div>
    </Footer>
  )
}
