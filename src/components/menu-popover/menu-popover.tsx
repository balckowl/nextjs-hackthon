import { signOut } from '@/auth'
import * as Popover from '@radix-ui/react-popover'
import type { ReactNode } from 'react'
import { MdLogout } from 'react-icons/md'

type Props = {
  children: ReactNode;
  name: string;
}

export default function MenuPopover({ children, name }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-56 bg-white rounded shadow-lg border border-gray-200 p-0"
          sideOffset={5}
          side="top"
          align="end"
        >
          <div className="border-b p-3">{name}</div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
