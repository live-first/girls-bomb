import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './listbox.css'

const Row = ({ size, className, children }: PropsWithChildren<ListBoxCommon>) => {
  const padding = size === 'lg' ? 'py-5' : size === 'md' ? 'py-4' : 'py-2'
  return <div className={cn('flex listbox-row', padding, className)}>{children}</div>
}

const Col = ({ className, children }: PropsWithChildren<ListBoxCommon>) => {
  return <div className={cn('flex flex-col listbox-col', className)}>{children}</div>
}

type ListBoxCommon = {
  variant?: 'row' | 'col'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
type ListBoxProps = {
  Row?: typeof Row
  Col?: typeof Col
} & ListBoxCommon

const ListBox = (props: PropsWithChildren<ListBoxProps>) => {
  const { variant = 'row', className, children } = props
  return <div className={cn('flex', variant === 'row' && 'flex-col', className)}>{children}</div>
}

ListBox.Row = Row
ListBox.Col = Col

export default ListBox
