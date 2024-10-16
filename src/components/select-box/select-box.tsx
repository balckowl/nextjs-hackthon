'use client'

import * as Select from '@radix-ui/react-select'
import { LiaChevronCircleDownSolid } from 'react-icons/lia'

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  items: string[]
}

export default function SelectBox({ value, setValue, items }: Props) {
  return (
    <div className="py-3 px-3 border-[#e1e1e1] border-[1px] bg-[#fafafa] rounded-md">
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger
          className="h-[30px] bg-[#fafafa] flex items-center justify-between w-full px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-0 focus:border-transparent"
          aria-label="食べ物"
        >
          <Select.Value placeholder="アイテムを選択" className="h-full py-3 px-3 block font-bold" />
          <Select.Icon>
            <LiaChevronCircleDownSolid />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-[#fafafa] border border-gray-200 rounded-md shadow-lg">
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
              {/* <ChevronUpIcon className="w-4 h-4" /> */}
            </Select.ScrollUpButton>
            <Select.Viewport className="p-1">
              <Select.Group>
                {items.map((item) => (
                  <Select.Item
                    key={item}
                    value={item}
                    className="relative flex items-center h-6 px-6 py-4 text-sm rounded-md select-none hover:bg-blue-100 focus:bg-blue-100 focus:outline-none"
                  >
                    <Select.ItemText className="font-bold">{item.toUpperCase()}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
              {/* <ChevronDownIcon className="w-4 h-4" /> */}
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
