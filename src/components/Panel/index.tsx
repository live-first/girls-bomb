import { PropsWithChildren } from 'react'
import { cn } from '../utils'

type PalenProps = {
  className?: string
}

export const Panel = (props: PropsWithChildren<PalenProps>) => {
  const { className, children } = props
  return (
    <div className={cn('flex flex-col px-4 py-4 bg-white rounded-2xl gap-6', className)}>
      {children}
    </div>
  )
}
