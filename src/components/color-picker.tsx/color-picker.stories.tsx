import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import ColorPicker from './color-picker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [color, setColor] = useState<string>(args.color ?? '#ff5555')

    useEffect(() => {
      if (args.color) {
        setColor(args.color)
      }
    }, [args.color])

    return (
      <div className="w-[20%]">
        <ColorPicker
          color={color}
          setColor={(newColor) => {
            setColor(newColor)
            args.setColor(newColor)
          }}
        />
      </div>
    )
  },
  args: {
    color: 'ddffgg',
    setColor: () => {},
  },
}
