import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Input'
import { ArrowLeft } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  onGoBack: () => void
}

export function AddLink({ onGoBack }: Props) {
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
        Configure o link que você deseja adicionar
      </h1>

      <FormProvider {...form}>
        <form autoComplete="off">
          <Input.Root name="text" className="mb-5">
            <Input.Label label="Digite ou cole o link" />

            <Input.Content name="text">
              <Input.Input
                placeholder="Ex.: https://agendamento.com"
                name="text"
              />
            </Input.Content>
          </Input.Root>

          <Input.Root name="text" className="mb-5">
            <Input.Label label="Digite como o link irá aparecer" />

            <Input.Content name="text">
              <Input.Input placeholder="Ex.: Clique para agendar" name="text" />
            </Input.Content>
          </Input.Root>

          <Button text="Adicionar" />
        </form>
      </FormProvider>
    </div>
  )
}
