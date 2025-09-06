import BoxShadowCard from '@/components/top/box-shadow-card'
import WaveCard from '@/components/top/wave-card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-[65%] mx-auto min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="relative m-auto size-24 mt-12">
        <Image
          src="/logo/icon.svg"
          alt="Workspaceのアイコン"
          fill
          className="object-contain"
        />
      </div>
      <h2 className="font-bold text-[58px] text-center pt-[24px]">
        あたらしいコードを作りましょう。
      </h2>
      <p className="font-bold text-[20px] text-center pt-[8px] pb-[64px]">つくりたいエフェクトを選択してください。</p>
      <div className="grid grid-cols-2 gap-5">
        <BoxShadowCard />
        <WaveCard />
      </div>
    </div>
  )
}
