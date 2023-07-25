import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Input'
import { ArrowLeft } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  onGoBack: () => void
}

export function AddText({ onGoBack }: Props) {
  const form = useForm()

  return (
    <div>
      <button
        className="flex items-center gap-2 mb-5 text-gray-600"
        onClick={onGoBack}
      >
        <ArrowLeft size={16} />
        voltar
      </button>

      <h1 className="text-xl font-medium mb-5">
        Escreva o texto que você deseja adicionar
      </h1>

      <FormProvider {...form}>
        <form autoComplete="off">
          <Input.Root name="text">
            <Input.Content name="text">
              <Input.Input placeholder="Digite o texto" name="text" />
            </Input.Content>
          </Input.Root>

          <Button text="Adicionar" className="mt-5" />
        </form>
      </FormProvider>
    </div>
  )
}
