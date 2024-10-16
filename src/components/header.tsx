import Link from 'next/link'
import Button from './button/button'

export default function Header() {
  return (
    <div className="h-[80px]">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="/" className="text-[30px] font-bold">
          <h1>Workspace</h1>
        </Link>
        <Button>ログイン</Button>
      </div>
    </div>
  )
}
