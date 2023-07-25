import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Input'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { ArrowLeft } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  onGoBack: () => void
}

export function AddImage({ onGoBack }: Props) {
  const form = useForm()

  return (
    <div>
      {/* @todo: componentizar botão de voltar */}
      <button
        className="flex items-center gap-2 mb-5 text-gray-600"
        onClick={onGoBack}
      >
        <ArrowLeft size={16} />
        voltar
      </button>

      <h1 className="text-xl font-medium mb-5">
        Como você deseja adicionar a imagem?
      </h1>

      <FormProvider {...form}>
        <form autoComplete="off">
          <RadioGroup />

          <Input.Root name="link" className="mt-5">
            <Input.Content name="link">
              <Input.Input placeholder="Digite o link" name="text" />
            </Input.Content>
          </Input.Root>

          <Button text="Adicionar" className="mt-5" />
        </form>
      </FormProvider>
    </div>
  )
}
