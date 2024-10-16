import { cn } from '@/lib/utils'
import { Button as RadixButton } from '@radix-ui/themes'
import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'rounded-full disabled:cursor-not-allowed font-semibold text-[20px]',
  variants: {
    variant: {
      solid: '',
      outline: 'border-2',
      public: '',
      private: ''
    },
    size: {
      md: 'px-7 py-2',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      className: 'bg-primary text-white',
    },
    {
      variant: 'outline',
      className: 'bg-white text-primary border-primary',
    },
    {
      variant: 'public',
      className: 'text-primary bg-secondary'
    },
    {
      variant: 'private',
      className: 'text-[#909090] bg-[#90909026]'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

export default function Button({
  variant,
  className,
  children,
}: {
  variant?: ButtonVariants['variant']
  className?: string
  children: ReactNode
}) {
  return <RadixButton className={cn(buttonStyles({ variant, className }))}>{children}</RadixButton>
}
