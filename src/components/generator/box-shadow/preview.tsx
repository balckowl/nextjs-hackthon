import Image from "next/image"

type Props = {
  boxShadow: string
  color: string
  image?: string
  name?: string
}

export default function Preview({ boxShadow, color, image, name }: Props) {
  return (
    <div className="flex justify-center items-center h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
      <div
        className="w-[170px] h-[170px] rounded-[32px]"
        style={{ boxShadow, backgroundColor: color }}
      />
      {name && image && <div className='flex items-center gap-3 absolute top-4 left-4'>
        <Image src={image as string} width={35} height={35} alt="" className='border rounded-full' />
        <p>{name}</p>
      </div>}
    </div>
  )
}
