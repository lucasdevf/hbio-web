import { Button } from '@/components/ui/Button'
import { ButtonText } from '@/components/ui/ButtonText'
import { Archive } from 'phosphor-react'

export function Heading() {
  return (
    <div className="flex items-center justify-between mt-8">
      <h1 className="text-2xl font-medium">Personalizar página</h1>

      <div className="flex items-center space-x-10">
        <ButtonText icon={Archive} text="Arquivar página" />

        <Button text="Editar link" />
      </div>
    </div>
  )
}
