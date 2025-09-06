import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { LuBookmark } from 'react-icons/lu'

type Props = {
  children: ReactNode
  name: string
  image: string
}

export default function IconPopover({ children, name, image }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-56 bg-white rounded shadow-lg border border-gray-200 p-0"
          sideOffset={5}
          side="bottom"
          align="end"
        >
          <div className="border-b p-3 flex items-center gap-4">
            <Image src={image} width={30} height={30} alt="" className="border rounded-full" />
            <p>{name}</p>
          </div>
          <div className="border-b px-6 py-3 flex items-center gap-3">
            <LuBookmark />
            <Link href="/bookmark">ブックマーク</Link>
          </div>
          {/* No logout in local mode */}
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
