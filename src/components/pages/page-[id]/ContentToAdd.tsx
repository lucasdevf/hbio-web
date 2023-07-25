import { CaretRight } from 'phosphor-react'
import { ElementType } from 'react'

interface Props {
  icon: ElementType
  text: string
  onClick: () => void
}

export function ContentToAdd({ icon: Icon, text, onClick }: Props) {
  return (
    <button className="flex items-center w-full" onClick={onClick}>
      <div className="flex flex-1 items-center space-x-3">
        <Icon size={20} />

        <p>{text}</p>
      </div>

      <CaretRight />
    </button>
  )
}
