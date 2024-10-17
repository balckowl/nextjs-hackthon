import type { Meta, StoryObj } from '@storybook/react'
import InputSlider from './input-slider'
import { useState, useEffect } from 'react'

const meta: Meta<typeof InputSlider> = {
  title: 'Components/InputSlider',
  component: InputSlider,
  argTypes: {
    min: {
      control: { type: 'number' },
      defaultValue: 0,
      description: 'The minimum value for the slider',
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
      description: 'The maximum value for the slider',
    },
    value: {
      control: { type: 'number' },
      description: 'The initial value for the slider',
    },
    unit: {
      control: { type: 'select' },
      options: ['%', 'px'],
      defaultValue: '%',
      description: 'The unit for the slider value',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value)

    useEffect(() => {
      setValue(args.value)
    }, [args.value])

    return (
      <div className="w-[20%]">
        <InputSlider
          value={value}
          setValue={(newValue) => {
            setValue(newValue)
            args.setValue(newValue)
          }}
          min={args.min}
          max={args.max}
          unit={args.unit}
        />
      </div>
    )
  },
  args: {
    value: 50, // 初期値を50に設定
    setValue: () => {},
    min: 0,
    max: 100,
    unit: '%',
  },
}
