'use client'
import type { SelectBoxShadow, SelectWave } from '@/db/schema'
import { useState } from 'react'

type Props = {
  wave?: SelectWave
  boxshadow?: SelectBoxShadow
}

export default function Bookmarkcard({ wave, boxshadow }: Props) {
  const [isPublic, setIsPublic] = useState<boolean>(false)

  return (
    <div className="col-span-1">
      <div className="border-[2px] h-[220px] rounded-xl relative flex items-center justify-center">
        {wave && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 rounded-bl-xl rounded-br-xl"
          >
            <title>波</title>
            <path
              fill={wave.color}
              fill-opacity="1"
              d="M0,320L17.1,314.7C34.3,309,69,299,103,261.3C137.1,224,171,160,206,144C240,128,274,160,309,176C342.9,192,377,192,411,202.7C445.7,213,480,235,514,234.7C548.6,235,583,213,617,224C651.4,235,686,277,720,282.7C754.3,288,789,256,823,250.7C857.1,245,891,267,926,266.7C960,267,994,245,1029,213.3C1062.9,181,1097,139,1131,106.7C1165.7,75,1200,53,1234,85.3C1268.6,117,1303,203,1337,218.7C1371.4,235,1406,181,1423,154.7L1440,128L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            />
          </svg>
        )}
        {boxshadow && (
          <div
            className="w-[100px] h-[100px] rounded-xl"
            style={{
              backgroundColor: boxshadow.color,
              boxShadow: `${boxshadow.offsetX}px ${boxshadow.offsetY}px ${boxshadow.blurRadius}px ${boxshadow.spreadRadius}px ${boxshadow.shadowColor}`,
            }}
          />
        )}
      </div>
      <div className="flex justify-between">
        <h2 className="text-xl mt-2">タイトル</h2>
        <button
          type="button"
          onClick={() => setIsPublic(true)}
          className={`${isPublic ? 'bg-[#ededed] text-[#909090] hidden' : 'bg-secondary text-primary'} font-bold text-[13px] px-5 mt-2 rounded-xl`}
        >
          {wave?.isShared ? "公開" : "非公開"}
        </button>
      </div>
      <small className="text-[#BEBEBE]">2024/12/31</small>
    </div>
  )
}
