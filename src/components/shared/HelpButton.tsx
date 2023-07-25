import { Question } from 'phosphor-react'

export function HelpButton() {
  return (
    <button className="flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white h-11 rounded-full px-6 font-medium fixed bottom-5 right-5">
      <Question size={20} /> Ajuda
    </button>
  )
}
