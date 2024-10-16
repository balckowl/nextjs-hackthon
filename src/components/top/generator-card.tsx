import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  name: string
  children: ReactNode
}

export default function GeneratorCard({ name, children }: Props) {
  return (
    <Link
      href="/box-shadow"
      className="text-[55px] text-primary font-semibold border-[3px] h-[300px] flex justify-center items-center rounded-[30px] relative overflow-hidden"
    >
      {name}
      {children}
    </Link>
  )
}
