'use client'
import AlertPopup from '@/components/alert-popup/alert-popup'
import ColorPicker from '@/components/color-picker.tsx/color-picker'
import BookmarkDialog from '@/components/generator/bookmark-dialog'
import InputSlider from '@/components/input-slider/input-slider'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { useState } from 'react'
import { HiArrowPath } from 'react-icons/hi2'
import { RiClipboardLine } from 'react-icons/ri'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Page() {
  const [boxColor, setboxColor] = useState<string>('#ff5555')
  const [boxShadowx, setboxShadowx] = useState<number>(0)
  const [boxShadowy, setboxShadowy] = useState<number>(0)
  const [boxShadowb, setboxShadowb] = useState<number>(15)
  const [boxShadows, setboxShadows] = useState<number>(-5)
  const [boxShadowColor, setboxShadowColor] = useState<string>('#777777')
  const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
  const [isVanillaCss, setIsVanillaCss] = useState<boolean>(false)

  const boxShadow = `${boxShadowx}px ${boxShadowy}px ${boxShadowb}px ${boxShadows}px ${boxShadowColor}`

  const boxShadowCode = `.box {
  box-shadow: ${boxShadow};
}`

  const twBoxshadowCode = `shadow-[${boxShadowx}px_${boxShadowy}px_${boxShadowb}px_${boxShadows}px_${boxShadowColor}]`

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
      <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} />
      <div className="grid grid-cols-2 gap-5 pt-[35px] mb-[35px]">
        <div className="flex justify-center items-center h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
          <div
            className="w-[170px] h-[170px] rounded-[32px]"
            style={{ boxShadow, backgroundColor: boxColor }}
          />
        </div>
        <div className="h-[320px] rounded-2xl border-[3px] relative">
          <button
            type="button"
            className="focus:outline-none absolute top-5 right-5 border-[2px] p-3 rounded-md bg-white"
            onClick={() => copyToClipboard(isVanillaCss ? boxShadowCode : twBoxshadowCode, setIsCopySuccess)}
          >
            <RiClipboardLine color="#ededed" />
          </button>
          <button
            type="button"
            className="focus:outline-none absolute bottom-5 right-5 border-[2px] p-3 rounded-md bg-white"
            onClick={() => setIsVanillaCss(!isVanillaCss)}
          >
            <HiArrowPath color='#ededed'/>
          </button>
          <div className="absolute top-5 left-5 bg-secondary text-primary text-[13px] px-4 py-1 rounded-full font-bold">
            {isVanillaCss ? "CSS": "Tailwind CSS"}
          </div>
          <SyntaxHighlighter
            customStyle={{
              borderRadius: '16px',
              overflow: 'scroll',
              height: '100%',
              margin: '0px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '16px',
            }}
            language="css"
            style={oneLight}
          >
            {isVanillaCss ? boxShadowCode: twBoxshadowCode}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="mb-[20px] flex gap-3 items-center">
        <h2 className="font-bold text-[20px]">プロパティ</h2>
        <BookmarkDialog />
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6">
        <div>
          <p className="mb-[7px] text-[14px]">カラー</p>
          <ColorPicker color={boxColor} setColor={setboxColor} />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">シャドウカラー</p>
          <ColorPicker color={boxShadowColor} setColor={setboxShadowColor} />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">X軸オフセット</p>
          <InputSlider value={boxShadowx} setValue={setboxShadowx} min={-50} max={50} unit="px" />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">Y軸オフセット</p>
          <InputSlider value={boxShadowy} setValue={setboxShadowy} min={-50} max={50} unit="px" />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">ぼかし</p>
          <InputSlider value={boxShadowb} setValue={setboxShadowb} min={0} max={100} unit="px" />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">広がり</p>
          <InputSlider value={boxShadows} setValue={setboxShadows} min={-50} max={50} unit="px" />
        </div>
      </div>
    </div>
  )
}
