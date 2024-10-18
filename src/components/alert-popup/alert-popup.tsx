'use client'
import { useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  text: string
}

export default function AlertPopup({ value, setValue, text }: Props) {
  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => {
        setValue(false)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [value, setValue])

  return (
    <div>
      <AnimatePresence>
        {value && (
          <motion.div
            animate={{ x: ["100%", 0], opacity: [0, 1] }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}  
            className="bg-success text-white rounded-md w-max px-5 py-4 font-bold text-[20px] absolute bottom-[25px] right-[25px] flex items-center gap-2"
          >
            {text}
            <button type="button" onClick={() => setValue(false)}>
              <RxCross2 fontWeight={600} size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
