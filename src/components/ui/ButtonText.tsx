import { ElementType } from 'react'

interface Props {
  icon: ElementType
  text: string
}

export function ButtonText({ icon: Icon, text }: Props) {
  return (
    <button className="flex items-center space-x-2">
      <Icon size={20} />

      <span className="font-medium">{text}</span>
    </button>
  )
}
