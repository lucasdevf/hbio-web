import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function InputPrefix({ children }: Props) {
  return <div className="p-3 font-medium pr-0">{children}</div>
}
