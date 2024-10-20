import { cn } from '@/lib/utils'
import type { ReactNode, MouseEvent } from 'react'

type Props = {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export default function CodeblockInnerBtn({ children, onClick, className }: Props) {
  return (
    <button
      type="button"
      className={cn('focus:outline-none border-[2px] p-3 rounded-md bg-white', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
