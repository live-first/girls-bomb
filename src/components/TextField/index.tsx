import { ChangeEventHandler } from 'react'
import { cn } from '../utils'
import './style.css'

type TextFieldProps = {
  id: string
  placeholder?: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const TextField = (props: TextFieldProps) => {
  const { id, placeholder, required = false, size = 'md', error, className, onChange } = props

  return (
    <input
      type='text'
      placeholder={placeholder}
      required={required}
      id={id}
      className={cn(
        `input-text-${size} bg-panel`,
        error && 'error',
        'border-1 border-foreground p-2',
        className,
      )}
      onChange={onChange}
    />
  )
}
