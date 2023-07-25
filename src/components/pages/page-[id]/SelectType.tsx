import { Image, Link, Rectangle, TextAlignCenter } from 'phosphor-react'
import { ContentToAdd } from './ContentToAdd'

interface Props {
  onSelect: (type: string) => void
}

export function SelectType({ onSelect }: Props) {
  const contentsToAdd = [
    {
      icon: TextAlignCenter,
      text: 'Texto',
    },
    {
      icon: Rectangle,
      text: 'Botão',
    },
    {
      icon: Link,
      text: 'Link',
    },
    {
      icon: Image,
      text: 'Imagem',
    },
  ]

  return (
    <>
      <h1 className="text-xl font-medium mb-5">
        Qual item você deseja adicionar na página?
      </h1>

      <div className="flex flex-col space-y-8 mt-5">
        {contentsToAdd.map((content) => (
          <ContentToAdd
            key={content.text}
            icon={content.icon}
            text={content.text}
            onClick={() => onSelect(content.text)}
          />
        ))}
      </div>
    </>
  )
}
