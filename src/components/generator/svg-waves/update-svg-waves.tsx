'use client'
import AlertPopup from '@/components/alert-popup/alert-popup'
import CodeblockInnerBtn from '@/components/generator/codeblock-inner-btn'
import { ColorControl } from '@/components/generator/color-control'
import PropertyArea from '@/components/generator/property-area'
import { SelectControl } from '@/components/generator/select-control'
import { SliderControl } from '@/components/generator/slide-control'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { getWavePath } from '@/lib/get-wave-path'
import { useState } from 'react'
import { RiClipboardLine } from 'react-icons/ri'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BookmarkDialog from '@/components/generator/bookmark-dialog'
import { SelectUser, SelectWave } from '@/db/schema'
import { useRouter } from 'next/navigation'
import { PiPencilCircleFill } from 'react-icons/pi'
import Image from 'next/image'

type Props = {
  svgwaveWithUser: { wave: SelectWave, user: SelectUser | null },
  userId: string | null
}

export default function UpdateSvgWaves({ svgwaveWithUser, userId: nowLoggedUser }: Props) {

  const {
    id,
    color: oldColor,
    opacity: oldOpacity,
    type: oldType,
    direction: oldDirection,
    title: oldTitle,
    userId
  } = svgwaveWithUser["wave"]

  const { name, image } = svgwaveWithUser["user"]!

  const router = useRouter()
  const [color, setColor] = useState<string>(oldColor)
  const [opacity, setOpacity] = useState<number>(oldOpacity)
  const [type, setType] = useState<string>(oldType)
  const waveList = ['smooth', 'sine', 'square']
  const [direction, setDirection] = useState<string>(oldDirection)
  const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
  const [isShared, setIsShared] = useState<boolean>(true)
  const directionList = ['top', 'bottom']
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(oldTitle)

  const svgCode = `<svg 
  viewBox="0 0 1440 590" 
  xmlns="http://www.w3.org/2000/svg" 
  class="transform="${direction === 'top' ? 'scale(1, -1)' : ''}">
  <title>波</title>
  <path d="${getWavePath(type)}" stroke="none" stroke-width="0" fill="${color}" fill-opacity="${opacity / 100}" class="transition-all duration-300 ease-in-out delay-150 path-0" />
</svg>`

  const handleSubmitWave = async () => {
    await fetch(`${process.env.SITE_BASE_URL}/api/wave`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        isShared,
        type,
        direction,
        opacity,
        color,
        title
      }),
    })

    setIsSubmittingSuccess(true)
    router.refresh()
  }

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
      <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} text="コピーできました" />
      <AlertPopup
        value={isSubmittingSuccess}
        setValue={setIsSubmittingSuccess}
        text="登録しました"
      />
      <div className="grid grid-cols-2 gap-5 pt-[35px] mb-[35px]">
        <div className="bg-white h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
          <svg
            viewBox="0 0 1440 590"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ${direction}-0 left-0`}
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
          {name && image && <div className='flex items-center gap-3 absolute top-4 left-4'>
            <Image src={image as string} width={35} height={35} alt="" className='border rounded-full' />
            <p>{name}</p>
          </div>}
        </div>
        <div className="h-[320px] rounded-2xl border-[3px] relative">
          <div className="absolute top-5 right-5 flex gap-2">
            <CodeblockInnerBtn onClick={(e) => copyToClipboard(e, svgCode, setIsCopySuccess)}>
              <RiClipboardLine color="#909090" />
            </CodeblockInnerBtn>
            {userId === nowLoggedUser && <BookmarkDialog
              handleSubmitBoxShadow={handleSubmitWave}
              isShared={isShared}
              setIsShared={setIsShared}
              title={title}
              setTitle={setTitle}
              mainText="スタイル情報を更新"
              saveBtnText='更新する'
            >
              <CodeblockInnerBtn>
                <PiPencilCircleFill color="#909090" />
              </CodeblockInnerBtn>
            </BookmarkDialog>}
          </div>

          <SyntaxHighlighter
            customStyle={{
              borderRadius: '16px',
              overflow: 'scroll',
              height: '100%',
              margin: '0px',
              padding: '0px',
              display: 'flex',
              alignItems: 'center',
              paddingInline: '60px',
              fontSize: '16px',
            }}
            language="html"
            style={oneLight}
          >
            {svgCode}
          </SyntaxHighlighter>
        </div>
      </div>

      <PropertyArea>
        <ColorControl label="カラー" color={color} setColor={setColor} />
        <SliderControl label="透明度" value={opacity} setValue={setOpacity} />
        <SelectControl
          label="向き"
          value={direction}
          setValue={setDirection}
          items={directionList}
        />
        <SelectControl label="波の形" value={type} setValue={setType} items={waveList} />
      </PropertyArea>
    </div>
  )
}
