import type { SelectUser, SelectWave } from '@/db/schema'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { getWavePath } from '@/lib/get-wave-path'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { RiClipboardLine } from 'react-icons/ri'
import AlertPopup from '../alert-popup/alert-popup'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'

type Props = {
    waveWithUser: { waves: SelectWave, user: SelectUser | null },
    userId: string | null;
}

export default function WaveCard({ waveWithUser, userId: nowLoggedUser }: Props) {

    const router = useRouter()

    const { type, direction, color, opacity, id, title, createdAt, userId } = waveWithUser["waves"]
    const { name, image } = waveWithUser["user"]!
    const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
    const formattedCreatedAt = format(createdAt, "yyyy/MM/dd")

    const svgCode = `<svg 
  viewBox="0 0 1440 590" 
  xmlns="http://www.w3.org/2000/svg" 
  class="transform="${direction === 'top' ? 'scale(1, -1)' : ''}">
  <title>波</title>
  <path d="${getWavePath(type)}" stroke="none" stroke-width="0" fill="${color}" fill-opacity="${opacity / 100}" class="transition-all duration-300 ease-in-out delay-150 path-0" />
</svg>`

    // React.MouseEventを使用して型を指定
    const handleDeleteWave = async (e: React.MouseEvent<HTMLDivElement>) => {

        e.preventDefault()
        e.stopPropagation()

        await fetch("http://localhost:3000/api/wave", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id
            })
        })

        router.refresh()
    }

    return (
        <Link href={`/svg-waves/${id}`} className="col-span-1">
            <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} text="コピーできました" />
            <div className="bg-white border-[2px] h-[220px] rounded-xl relative mb-[10px]">
                <svg
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute ${direction}-0 left-0 rounded-bl-xl rounded-br-xl`}
                    transform={direction === 'top' ? 'scale(1, -1)' : ''}
                >
                    <title>波</title>
                    <path
                        d={getWavePath(type)}
                        stroke="none"
                        strokeWidth="0"
                        fill={color}
                        fillOpacity={opacity / 100}
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    />
                </svg>
                <div className='flex items-center gap-3 absolute top-3 left-3'>
                    <Image src={image as string} width={30} height={30} alt="" className='border rounded-full' />
                    <p>{name}</p>
                </div>
                <div className='absolute top-3 right-3 flex gap-2'>
                    <div onClick={(e) => copyToClipboard(e, svgCode, setIsCopySuccess)} className='bg-white border-[2px] p-2 rounded-md'>
                        <RiClipboardLine />
                    </div>
                    {userId === nowLoggedUser && <div onClick={handleDeleteWave} className='bg-white border-[2px] p-2 rounded-md'>
                        <HiOutlineTrash />
                    </div>}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <small className="text-[#BEBEBE]">{formattedCreatedAt}</small>
        </Link>
    )
}
