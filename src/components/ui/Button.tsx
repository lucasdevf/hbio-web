import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        'bg-gray-900 hover:bg-gray-800 text-white h-11 rounded-md px-6 font-medium',
        rest.className,
      )}
    >
      {text}
    </button>
  )
}
