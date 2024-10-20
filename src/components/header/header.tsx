import { auth, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import MenuPopover from '../icon-popover/icon-popover'
import Button from '../button/button'
import { MdPeopleAlt, MdWaves } from 'react-icons/md'
import { RiShadowFill } from 'react-icons/ri'

export default async function Header() {
  const session = await auth()

  return (
    <div className="h-[80px]">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="/" className="text-[30px] font-bold">
          <h1>Workspace</h1>
        </Link>
        <div className='flex items-center gap-5'>
          <div className='flex gap-3 border-r pr-[20px] items-center'>
            <Link href="/box-shadow/new" className='flex items-center gap-1 border p-3 rounded-xl bg-white'>
              <RiShadowFill />
            </Link>
            <Link href="/svg-waves/new" className='flex items-center gap-1 border p-3 rounded-xl bg-whtie'>
              <MdWaves />
            </Link>
            <Link href="/community" className='flex items-center gap-1 border p-3 rounded-xl bg-white'>
              <MdPeopleAlt />
            </Link>
          </div>
          {!session && (
            <form
              action={async () => {
                'use server'
                await signIn('github')
              }}
            >
              <Button>ログイン</Button>
            </form>
          )}
          {session && (
            <MenuPopover name={session.user?.name as string} image={session.user?.image as string}>
              <Image
                src={session.user?.image as string}
                width={30}
                height={30}
                alt="アイコン"
                className="border size-[42px] rounded-full cursor-pointer"
              />
            </MenuPopover>
          )}
        </div>
      </div>
    </div>
  )
}
