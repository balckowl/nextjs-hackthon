import Link from 'next/link'
import { MdWaves } from 'react-icons/md'
import { RiShadowFill } from 'react-icons/ri'

export default function Header() {
  return (
    <div className="h-[80px]">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="/" className="text-[30px] font-bold">
          <h1>Workspace</h1>
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex gap-3 border-r pr-[20px] items-center">
            <Link href="/box-shadow/new" className="flex items-center gap-1 border p-3 rounded-xl bg-white" aria-label="Box Shadow Generator">
              <RiShadowFill />
            </Link>
            <Link href="/svg-waves/new" className="flex items-center gap-1 border p-3 rounded-xl bg-white" aria-label="SVG Waves Generator">
              <MdWaves />
            </Link>
          </div>
          <Link href="/bookmark" className="font-semibold text-sm underline">ブックマーク</Link>
        </div>
      </div>
    </div>
  )
}
