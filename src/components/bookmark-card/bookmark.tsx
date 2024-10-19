'use client'
import Bookmarkcard from '@/components/bookmark-card/bookmark-card'
import type { SelectBoxShadow, SelectWave } from '@/db/schema'
import { useState } from 'react'

type Props = {
  allWaves: SelectWave[]
  allBoxShadows: SelectBoxShadow[]
}

export default function BookMark({ allWaves, allBoxShadows }: Props) {
  const [toggleNum, setIsToggleNum] = useState<number>(0)

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)] pb-[150px]">
      <h2 className="font-bold text-[30px] text-center pt-[50px] pb-[60px]">
        ブックマークしたアイテム
      </h2>
      <div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-3">
            <button
              type="button"
              className="px-8 py-1 rounded-md bg-[#eaeaea]"
              onClick={() => setIsToggleNum(0)}
            >
              shadow
            </button>
            <button
              type="button"
              className="px-8 py-1 rounded-md bg-[#eaeaea]"
              onClick={() => setIsToggleNum(1)}
            >
              wave
            </button>
          </div>
          <p className="text-[#909090]">更新順</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {toggleNum === 0 &&
          allBoxShadows.map((boxShadow) => (
            <Bookmarkcard key={boxShadow.id} boxshadow={boxShadow} />
          ))}
        {toggleNum === 1 && allWaves.map((wave) => <Bookmarkcard key={wave.id} wave={wave} />)}
      </div>
    </div>
  )
}
