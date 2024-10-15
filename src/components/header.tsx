import Button from './button/button'

export default function Header() {
  return (
    <div className="h-[80px] border-b">
      <div className="container mx-auto flex justify-between h-full items-center">
        <h1 className="text-[32px] font-bold">Workspace</h1>
        <Button>ログイン</Button>
      </div>
    </div>
  )
}
