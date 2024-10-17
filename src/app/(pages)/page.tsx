import BoxShadowCard from '@/components/top/box-shadow-card'
import WaveCard from '@/components/top/wave-card'

export default function Home() {
  return (
    <div className="w-[65%] mx-auto min-h-[calc(100vh-80px)]">
      <h2 className="font-semibold text-[30px] text-center pt-[50px] pb-[60px]">
        あたらしいコードを作りましょう
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <BoxShadowCard />
        <WaveCard />
      </div>
    </div>
  )
}
