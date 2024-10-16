'use client'
import AlertPopup from '@/components/alert-popup/alert-popup'
import ColorPicker from '@/components/color-picker.tsx/color-picker'
import InputSlider from '@/components/input-slider/input-slider'
import SelectBox from '@/components/select-box/select-box'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { getWavePath } from '@/lib/get-wave-path'
import { useState } from 'react'
import { RiClipboardLine } from 'react-icons/ri'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Page() {
  const [color, setColor] = useState<string>('#ff5555')
  const [opacity, setOpacity] = useState<number>(100)
  const [waveType, setWaveType] = useState<string>('sine')
  const waveList = ['smooth', 'sine', 'square']
  const [direction, setDirection] = useState<string>('bottom')
  const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
  const directionList = ['top', 'bottom']

  const svgCode = `
    <svg 
      viewBox="0 0 1440 590" 
      xmlns="http://www.w3.org/2000/svg" 
      class="transform="${direction === 'top' ? 'scale(1, -1)' : ''}">
      <path 
        d="${getWavePath(waveType)}" 
        stroke="none" 
        stroke-width="0" 
        fill="${color}" 
        fill-opacity="${opacity / 100}" 
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      />
    </svg>
  `

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
      <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} />

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
              d={getWavePath(waveType)}
              stroke="none"
              strokeWidth="0"
              fill={color}
              fillOpacity={opacity / 100}
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            />
          </svg>
        </div>
        <div className="h-[320px] rounded-2xl border-[3px] relative">
          <button
            type="button"
            className="focus:outline-none absolute top-5 right-5 border-[2px] p-3 rounded-md bg-white"
            onClick={() => copyToClipboard(svgCode, setIsCopySuccess)}
          >
            <RiClipboardLine color="#ededed" />
          </button>
          <SyntaxHighlighter
            customStyle={{
              borderRadius: '16px',
              overflow: 'scroll',
              height: '100%',
              margin: '0px',
              padding: '0px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
            }}
            language="html"
            style={oneLight}
          >
            {svgCode}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="mb-[20px]">
        <h2 className="font-bold text-[20px]">プロパティ</h2>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6">
        <div>
          <p className="mb-[7px] text-[14px]">カラー</p>
          <ColorPicker color={color} setColor={setColor} />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">透明度</p>
          <InputSlider value={opacity} setValue={setOpacity} />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">向き</p>
          <SelectBox value={direction} setValue={setDirection} items={directionList} />
        </div>
        <div>
          <p className="mb-[7px] text-[14px]">波の形</p>
          <SelectBox value={waveType} setValue={setWaveType} items={waveList} />
        </div>
      </div>
    </div>
  )
}
