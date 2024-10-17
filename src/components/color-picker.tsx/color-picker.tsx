'use client'

import { type Dispatch, type SetStateAction, useRef } from 'react'

type Props = {
  color?: string
  setColor: Dispatch<SetStateAction<string>>
}

export default function ColorPicker({ color = '#ff5555', setColor }: Props) {
  const colorInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    colorInputRef.current?.click()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-3 border-[#e1e1e1] border-[1px] bg-[#fafafa] rounded-md w-full px-3 py-3"
    >
      <div
        className="w-[30px] h-[30px] rounded-md"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <p>{color.toUpperCase()}</p>
      <input
        type="color"
        className="absolute opacity-0 w-[30px] h-[30px] cursor-pointer"
        ref={colorInputRef}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </button>
  )
}
