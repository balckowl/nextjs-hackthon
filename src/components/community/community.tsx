'use client'
import Boxshadowcard from './boxshadow-card'
import type { SelectBoxShadow, SelectUser, SelectWave } from '@/db/schema'
import { useState } from 'react'
import WaveCard from './wave-card'
import NoContent from '../no-content/no-content'

type Props = {
    allWavesWithUsers: { waves: SelectWave, user: SelectUser | null }[]
    allBoxShadowsWithUsers: { "box-shadows": SelectBoxShadow, user: SelectUser | null }[]
    userId: string | null;
}

export default function Community({ allWavesWithUsers, allBoxShadowsWithUsers, userId }: Props) {
    const [toggleNum, setIsToggleNum] = useState<number>(0)

    return (
        <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)] pb-[150px]">
            <h2 className="font-semibold text-[30px] text-center pt-[50px] pb-[60px]">
                コミュニティ
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
                {allBoxShadowsWithUsers.length === 0 && toggleNum === 0 &&
                    <NoContent mainText='まだコミュニティに何も公開されていません。' linkText='新規作成' href="/box-shadow/new" />
                }
                {toggleNum === 0 &&
                    allBoxShadowsWithUsers.map((boxShadowWithUser) => (
                        <Boxshadowcard key={boxShadowWithUser['box-shadows'].id} boxshadowWithUser={boxShadowWithUser} userId={userId}/>
                    ))}
                {allWavesWithUsers.length === 0 && toggleNum === 1 &&
                    <NoContent mainText='まだコミュニティに何も公開されていません。' linkText='新規作成' href="/svg-waves/new" />
                }
                {toggleNum === 1 && allWavesWithUsers.map((waveWithUser) => <WaveCard key={waveWithUser.waves.id} waveWithUser={waveWithUser} userId={userId}/>)}
            </div>
        </div>
    )
}
