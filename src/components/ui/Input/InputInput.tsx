import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type Props = InputHTMLAttributes<HTMLInputElement>

export function InputInput({ ...rest }: Props) {
  const { register } = useFormContext()

  if (!rest.name) {
    throw new Error('Enter input name')
  }

  return (
    <input
      {...register(rest.name)}
      {...rest}
      className={twMerge('outline-none p-3 w-full', rest.className)}
    />
  )
}
