import type { Dispatch, SetStateAction, SyntheticEvent } from 'react'

export const copyToClipboard = (
  e: SyntheticEvent,
  code: string,
  setValue: Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault()
  e.stopPropagation()

  navigator.clipboard
    .writeText(code)
    .then(() => {
      setValue(true)
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}
