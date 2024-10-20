'use client'
import Boxshadowcard from '@/components/bookmark/boxshadow-card'
import type { SelectBoxShadow, SelectWave } from '@/db/schema'
import { useState } from 'react'
import WaveCard from './wave-card'
import NoContent from '../no-content/no-content'

type Props = {
  allWaves: SelectWave[]
  allBoxShadows: SelectBoxShadow[]
}

export default function BookMark({ allWaves, allBoxShadows }: Props) {
  const [toggleNum, setIsToggleNum] = useState<number>(0)

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)] pb-[150px]">
      <h2 className="font-semibold text-[30px] text-center pt-[50px] pb-[60px]">
        ブックマークしたアイテム
      </h2>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <button
            type="button"
            className={`${toggleNum === 0 ? "bg-primary text-white" : "text-[#909090] bg-[#eaeaea]"} w-[110px] py-1 rounded-md font-bold`}
            onClick={() => setIsToggleNum(0)}
          >
            Shadow
          </button>
          <button
            type="button"
            className={`${toggleNum === 1 ? "bg-primary text-white" : "text-[#909090] bg-[#eaeaea]"} w-[110px] py-1 rounded-md font-bold`}
            onClick={() => setIsToggleNum(1)}
          >
            Wave
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {allBoxShadows.length === 0 &&
          toggleNum === 0 && <NoContent mainText='まだ何もブックマークされていません。' linkText='新規作成' href="/box-shadow/new" />
        }
        {toggleNum === 0 &&
          allBoxShadows.map((boxShadow) => (
            <Boxshadowcard key={boxShadow.id} boxshadow={boxShadow} />
          ))}
        {allWaves.length === 0 &&
          toggleNum === 1 && <NoContent mainText='まだ何もブックマークされていません。' linkText='新規作成' href="/svg-waves/new" />
        }
        {toggleNum === 1 && allWaves.map((wave) => <WaveCard key={wave.id} wave={wave} />)}
      </div>
    </div>
  )
}
