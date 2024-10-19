import type { SelectBoxShadow } from '@/db/schema'
import { format } from 'date-fns'
import Link from 'next/link'

type Props = {
    boxshadow: SelectBoxShadow
}

export default function Boxshadowcard({ boxshadow }: Props) {
    const formattedCreatedAt = format(boxshadow.createdAt, "yyyy/MM/dd")

    return (
        <Link href={`/box-shadow/${boxshadow.id}`} className="col-span-1">
            <div className="border-[2px] h-[220px] rounded-xl relative flex items-center justify-center mb-[10px]">
                <div
                    className="w-[100px] h-[100px] rounded-xl"
                    style={{
                        backgroundColor: boxshadow.color,
                        boxShadow: `${boxshadow.offsetX}px ${boxshadow.offsetY}px ${boxshadow.blurRadius}px ${boxshadow.spreadRadius}px ${boxshadow.shadowColor}`,
                    }}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{boxshadow.title}</h2>
                <div className="bg-secondary text-primary text-[13px] px-4 py-1 rounded-full font-bold">
                    {boxshadow.isShared ? "公開" : "非公開"}
                </div>
            </div>
            <small className="text-[#BEBEBE]">{formattedCreatedAt}</small>
        </Link>
    )
}
