import type { Dispatch, SetStateAction } from 'react'

export const copyToClipboard = (code: string, setValue: Dispatch<SetStateAction<boolean>>) => {
  navigator.clipboard
    .writeText(code)
    .then(() => {
      setValue(true)
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}
