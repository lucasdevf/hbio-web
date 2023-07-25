import { PlusCircle } from 'phosphor-react'

export function CreatePageCard() {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center hover:bg-gray-50 cursor-pointer border border-gray-300 rounded-md h-96">
      <PlusCircle weight="fill" size={24} />

      <span className="text-sm font-medium">Criar página</span>
    </div>
  )
}
