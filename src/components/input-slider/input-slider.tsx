'use client'

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from 'react'

export default function InputSlider({
  value,
  setValue,
  min = 0,
  max = 100,
  unit = "%"
}: { value: number; setValue: Dispatch<SetStateAction<number>>, min?: number, max?: number, unit?: string }) {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const startXRef = useRef<number | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value >= min && value <= max) {
      setValue(value)
    }
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    setIsDragging(true)
    startXRef.current = event.clientX
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && startXRef.current !== null) {
      const diff = event.clientX - startXRef.current
      const newValue = Math.min(Math.max(value + diff, min), max)
      setValue(newValue)
      startXRef.current = event.clientX
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    startXRef.current = null
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, value])

  return (
    <div className="flex items-center gap-3 border-[#e1e1e1] border-[1px] bg-[#fafafa] rounded-md w-full px-3 py-3">
      <input
        ref={inputRef}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        className="h-[30px] w-[50%] focus:outline-none bg-[#fafafa] cursor-ew-resize"
      />
      <span>{unit}</span>
    </div>
  )
}
