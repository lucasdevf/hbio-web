import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string
  children: ReactNode
}

export function InputContent({ name, children, ...rest }: Props) {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <div className={twMerge(rest.className)}>
      <div
        {...rest}
        data-error={!!error}
        className="flex items-center border border-gray-300 rounded-md h-11 overflow-hidden data-[error=true]:border-red-500"
      >
        {children}
      </div>
    </div>
  )
}
