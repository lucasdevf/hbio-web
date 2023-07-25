import { Button } from '@/components/ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Info } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface Props {
  onGoBack: () => void
}

const addButonFormSchema = z.object({
  backgroundColor: z.string(),
  textColor: z.string(),
  text: z.string(),
})

type AddButtonFormType = z.infer<typeof addButonFormSchema>

export function AddButton({ onGoBack }: Props) {
  const form = useForm<AddButtonFormType>({
    resolver: zodResolver(addButonFormSchema),
    defaultValues: {
      backgroundColor: '#2563eb',
      textColor: '#ffffff',
      text: 'Texto do botão',
    },
  })

  const backgroundColor = form.watch('backgroundColor')

  const textColor = form.watch('textColor')

  return (
    <div>
      <button
        className="flex items-center font-medium gap-2 mb-5 text-gray-600"
        onClick={onGoBack}
      >
        <ArrowLeft weight="bold" size={16} />
        voltar
      </button>

      <h1 className="text-xl font-medium mb-5">
        Configure o botão que você deseja adicionar
      </h1>

      <div className="flex flex-col">
        <div className="flex items-center justify-around space-x-5 mb-5">
          <div className="flex flex-col space-y-3 items-center">
            <p className="font-medium">Cor do botão</p>

            <input
              {...form.register('backgroundColor')}
              type="color"
              className="border-none rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <p className="font-medium">Cor do texto botão</p>

            <input
              {...form.register('textColor')}
              type="color"
              className="border-none rounded-md"
            />
          </div>
        </div>

        <div>
          <span className="text-gray-600 text-sm font-medium">
            Preview do botão
          </span>

          <button
            className="h-11 rounded-md w-full mt-2"
            style={{
              backgroundColor,
            }}
            type="button"
          >
            <input
              {...form.register('text')}
              style={{
                color: textColor,
              }}
              type="text"
              className="bg-transparent text-center outline-none font-medium"
              autoComplete="off"
            />
          </button>
        </div>

        <span className="flex items-start space-x-2 mt-3">
          <Info size={28} />

          <p className="font-medium text-sm">
            Recomendamos utilizar cores que fiquem harmônicas com a sua página
          </p>
        </span>

        <Button text="Adicionar" className="mt-10" />
      </div>
    </div>
  )
}
