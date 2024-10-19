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
import { LuBookmark } from 'react-icons/lu'

export default function Page() {
  const [color, setColor] = useState<string>('#ff5555')
  const [opacity, setOpacity] = useState<number>(100)
  const [type, setType] = useState<string>('sine')
  const waveList = ['smooth', 'sine', 'square']
  const [direction, setDirection] = useState<string>('bottom')
  const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
  const [isShared, setIsShared] = useState<boolean>(true)
  const directionList = ['top', 'bottom']
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("タイトル未設定")

  const svgCode = `<svg 
  viewBox="0 0 1440 590" 
  xmlns="http://www.w3.org/2000/svg" 
  class="transform="${direction === 'top' ? 'scale(1, -1)' : ''}">
  <title>波</title>
  <path d="${getWavePath(type)}" stroke="none" stroke-width="0" fill="${color}" fill-opacity="${opacity / 100}" class="transition-all duration-300 ease-in-out delay-150 path-0" />
</svg>`

  const handleSubmitWave = async () => {
    await fetch('http://localhost:3000/api/wave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isShared,
        type,
        direction,
        opacity,
        color,
        title
      }),
    })

    setIsSubmittingSuccess(true)
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
        <div className="h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
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
        </div>
        <div className="h-[320px] rounded-2xl border-[3px] relative">
          <div className="absolute top-5 right-5 flex gap-2">
            <CodeblockInnerBtn onClick={() => copyToClipboard(svgCode, setIsCopySuccess)}>
              <RiClipboardLine color="#909090" />
            </CodeblockInnerBtn>
            <BookmarkDialog
              handleSubmitBoxShadow={handleSubmitWave}
              isShared={isShared}
              setIsShared={setIsShared}
              title={title}
              setTitle={setTitle}
            >
              <CodeblockInnerBtn>
                <LuBookmark color="#909090" />
              </CodeblockInnerBtn>
            </BookmarkDialog>
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
