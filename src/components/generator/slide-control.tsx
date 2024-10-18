import type { Dispatch, SetStateAction } from 'react'
import InputSlider from '../input-slider/input-slider'

type Props = {
  label: string
  value: number
  setValue: Dispatch<SetStateAction<number>>
  min?: number
  max?: number
  unit?: string
}

export const SliderControl = ({ label, value, setValue, min, max, unit }: Props) => (
  <div>
    <p className="mb-[7px] text-[14px]">{label}</p>
    <InputSlider value={value} setValue={setValue} min={min} max={max} unit={unit} />
  </div>
)
