import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Badge({ children }: Props) {
  return (
    <div className="absolute top-5 left-5 bg-secondary text-primary text-[13px] px-4 py-1 rounded-full font-bold">
      {children}
    </div>
  )
}
