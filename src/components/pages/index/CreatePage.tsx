import { Button } from '@/components/ui/Button'
import * as Input from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { X } from 'phosphor-react'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import slugify from 'slugify'
import z from 'zod'
import { CreatePageCard } from './CreatePageCard'

const createPageFormSchema = z.object({
  name: z.string().nonempty('Informe um nome'),
  slug: z.string().nonempty('Informe um slug'),
})

type CreatePageFormType = z.infer<typeof createPageFormSchema>

export function CreatePage() {
  const { push } = useRouter()

  const form = useForm<CreatePageFormType>({
    resolver: zodResolver(createPageFormSchema),
  })

  const name = form.watch('name')

  function handleCreate(data: CreatePageFormType) {
    push('/page/123')
  }

  useEffect(() => {
    if (name) {
      const slug = slugify(name, {
        lower: true,
      })

      form.setValue('slug', slug)

      form.clearErrors('slug')
    } else {
      form.setValue('slug', '')
    }
  }, [name])

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <CreatePageCard />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] focus:outline-none">
          <div className="mb-8 flex justify-end">
            <Dialog.Close>
              <X size={20} />
            </Dialog.Close>
          </div>

          <h1 className="text-xl font-medium mb-3">
            Qual o nome você deseja dar à sua página?
          </h1>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleCreate)} autoComplete="off">
              <Input.Root className="mb-5" name="name">
                <Input.Content name="name">
                  <Input.Input
                    placeholder="Digite o nome da sua página"
                    name="name"
                  />
                </Input.Content>
              </Input.Root>

              <Input.Root className="mb-5" name="slug">
                <Input.Content name="slug">
                  <Input.Prefix>
                    <p>https://hbio.com/</p>
                  </Input.Prefix>

                  <Input.Input
                    placeholder="Seu identificador"
                    className="pl-1"
                    name="slug"
                  />
                </Input.Content>
              </Input.Root>

              <Button text="Criar página" />
            </form>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
