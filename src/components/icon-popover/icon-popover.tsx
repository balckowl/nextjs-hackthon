import { signOut } from '@/auth'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { MdLogout } from 'react-icons/md'

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
            <Image src={image} width={30} height={30} alt="" className='border rounded-full'/>
            <p>{name}</p>
          </div>
          <form
            className="p-3 foucs:outline-none"
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <button type="submit" className="flex items-center gap-3 bg-[#f0f0f0] w-full p-3 rounded-md">
              <MdLogout />
              ログアウト
            </button>
          </form>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
