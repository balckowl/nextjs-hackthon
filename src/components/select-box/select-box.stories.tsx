import type { Meta, StoryObj } from '@storybook/react'
import SelectBox from './select-box'
import { useState } from 'react'

const meta: Meta<typeof SelectBox> = {
  title: 'Components/SelectBox',
  component: SelectBox,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('bottom')
    return (
      <div className="w-[20%]">
        <SelectBox
          value={value}
          setValue={(newValue) => {
            setValue(newValue)
            args.setValue(newValue)
          }}
          items={args.items}
        />
      </div>
    )
  },
  args: {
    value: "bottom",
    setValue: () => {},
    items: ['top', 'bottom'],
  },
}
