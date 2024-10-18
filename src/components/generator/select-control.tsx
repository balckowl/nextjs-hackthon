import type { Dispatch, SetStateAction } from "react"
import SelectBox from "../select-box/select-box"

type Props = {
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  items: string[]
}

export const SelectControl = ({ label, value, setValue, items }: Props) => (
  <div>
    <p className="mb-[7px] text-[14px]">{label}</p>
    <SelectBox value={value} setValue={setValue} items={items} />
  </div>
)
