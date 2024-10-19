import type { SelectWave } from '@/db/schema'
import { getWavePath } from '@/lib/get-wave-path'
import Link from 'next/link'

type Props = {
    wave: SelectWave
}

export default function WaveCard({ wave }: Props) {

    return (
        <Link href={`/svg-waves/${wave.id}`} className="col-span-1">
            <div className="border-[2px] h-[220px] rounded-xl relative mb-[10px]">
                <svg
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute ${wave.direction}-0 left-0 rounded-bl-xl rounded-br-xl`}
                    transform={wave.direction === 'top' ? 'scale(1, -1)' : ''}
                >
                    <title>波</title>
                    <path
                        d={getWavePath(wave.type)}
                        stroke="none"
                        strokeWidth="0"
                        fill={wave.color}
                        fillOpacity={wave.opacity / 100}
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    />
                </svg>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{wave.title}</h2>
                <div className="bg-secondary text-primary text-[13px] px-4 py-1 rounded-full font-bold">
                    {wave.isShared ? "公開" : "非公開"}
                </div>
            </div>
            <small className="text-[#BEBEBE]">2024/12/31</small>
        </Link>
    )
}
