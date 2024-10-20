import type { SelectBoxShadow } from '@/db/schema'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { format } from 'date-fns'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { RiClipboardLine } from 'react-icons/ri'
import AlertPopup from '../alert-popup/alert-popup'
import { useRouter } from 'next/navigation'

type Props = {
    boxshadow: SelectBoxShadow
}

export default function Boxshadowcard({ boxshadow: hello }: Props) {
    const router = useRouter()
    const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
    const { offsetX, offsetY, blurRadius, spreadRadius, shadowColor, createdAt, id, color, isShared, title } = hello
    const formattedCreatedAt = format(createdAt, "yyyy/MM/dd")
    const boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`
    const boxShadowCode = `.box {
        box-shadow: ${boxShadow};
      }`

    const handleDeleteBoxShadow = async (e: MouseEvent) => {

        e.preventDefault()
        e.stopPropagation()

        await fetch(`${process.env.SITE_BASE_URL}/api/box-shadow`, {
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
        <Link href={`/box-shadow/${id}`} className="col-span-1">
            <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} text="コピーできました" />
            <div className="bg-white border-[2px] h-[220px] rounded-xl relative flex items-center justify-center mb-[10px] overflow-hidden">
                <div
                    className="w-[100px] h-[100px] rounded-xl"
                    style={{
                        backgroundColor: color,
                        boxShadow
                    }}
                />
                <div className='absolute top-3 right-3 flex gap-2'>
                    <div onClick={(e) => copyToClipboard(e, boxShadowCode, setIsCopySuccess)} className='bg-white border-[2px] p-2 rounded-md'>
                        <RiClipboardLine />
                    </div>
                    <div onClick={handleDeleteBoxShadow} className='bg-white border-[2px] p-2 rounded-md'>
                        <HiOutlineTrash />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="bg-secondary text-primary text-[13px] px-4 py-1 rounded-full font-bold">
                    {isShared ? "公開" : "非公開"}
                </div>
            </div>
            <small className="text-[#BEBEBE]">{formattedCreatedAt}</small>
        </Link>
    )
}
