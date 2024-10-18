import type { Dispatch, SetStateAction } from 'react'
import ColorPicker from '../color-picker.tsx/color-picker'

type Props = {
  label: string
  color: string
  setColor: Dispatch<SetStateAction<string>>
}

export const ColorControl = ({ label, color, setColor }: Props) => (
  <div>
    <p className="mb-[7px] text-[14px]">{label}</p>
    <ColorPicker color={color} setColor={setColor} />
  </div>
)
