import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string
  children: ReactNode
}

export function InputRoot({ name, children, ...rest }: Props) {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <div className={twMerge(rest.className)}>
      <div {...rest} className="flex flex-col">
        {children}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message as string}</p>
      )}
    </div>
  )
}
