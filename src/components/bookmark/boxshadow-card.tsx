import type { LocalBoxShadow } from '@/types'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { format } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { RiClipboardLine } from 'react-icons/ri'
import AlertPopup from '../alert-popup/alert-popup'
import { deleteLocalBoxShadow } from '@/lib/localStore'

type Props = {
    boxshadow: LocalBoxShadow
    onDeleted?: (id: number) => void
}

export default function Boxshadowcard({ boxshadow: hello, onDeleted }: Props) {
    const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
    const { offsetX, offsetY, blurRadius, spreadRadius, shadowColor, createdAt, id, color, title } = hello
    const formattedCreatedAt = format(new Date(createdAt), "yyyy/MM/dd")
    const boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`
    const boxShadowCode = `.box {
        box-shadow: ${boxShadow};
      }`

    const handleDeleteBoxShadow = async (e: React.SyntheticEvent) => {

        e.preventDefault()
        e.stopPropagation()

        deleteLocalBoxShadow(id)
        onDeleted?.(id)
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
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="コードをコピー"
                        onClick={(e) => copyToClipboard(e, boxShadowCode, setIsCopySuccess)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') copyToClipboard(e, boxShadowCode, setIsCopySuccess)
                        }}
                        className='bg-white border-[2px] p-2 rounded-md'
                    >
                        <RiClipboardLine />
                    </button>
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="削除"
                        onClick={handleDeleteBoxShadow}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleDeleteBoxShadow(e)
                        }}
                        className='bg-white border-[2px] p-2 rounded-md'
                    >
                        <HiOutlineTrash />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <small className="text-[#BEBEBE]">{formattedCreatedAt}</small>
        </Link>
    )
}
