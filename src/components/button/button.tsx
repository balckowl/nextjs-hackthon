import { cn } from '@/lib/utils'
import { Button as RadixButton } from '@radix-ui/themes'
import type { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'rounded-full disabled:cursor-not-allowed font-semibold text-[20px]',
  variants: {
    variant: {
        solid: "",
        outline: "border-2"
    },
    size:{
        md: "px-7 py-2"
    },
    textColor: {
        primary: "text-white"
    }
  },
  compoundVariants: [
    {
        variant: "solid",
        textColor: "primary",
        className: "bg-primary"
    }
  ],
  defaultVariants:{
    variant: "solid",
    size: "md",
    textColor: "primary"
  }

})

export default function Button({ className, children }: { className?: string; children: ReactNode }) {
  return <RadixButton className={cn(buttonStyles({ className }))}>{children}</RadixButton>
}
