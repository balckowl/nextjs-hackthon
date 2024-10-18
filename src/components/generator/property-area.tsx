import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function PropertyArea({ children }: Props) {
  return (
    <div>
      <div className="mb-[20px] flex gap-3 items-center">
        <h2 className="font-bold text-[20px]">プロパティ</h2>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6">{children}</div>
    </div>
  )
}
