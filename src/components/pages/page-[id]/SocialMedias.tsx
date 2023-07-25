import { Button } from '@/components/ui/Button'
import { ButtonText } from '@/components/ui/ButtonText'
import * as Input from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import {
  FacebookLogo,
  InstagramLogo,
  Plus,
  TiktokLogo,
  WhatsappLogo,
  X,
  YoutubeLogo
} from 'phosphor-react'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import slugify from 'slugify'
import z from 'zod'

const createPageFormSchema = z.object({
  name: z.string().nonempty('Informe um nome'),
  slug: z.string().nonempty('Informe um slug'),
})

type CreatePageFormType = z.infer<typeof createPageFormSchema>

export function SocialMedias() {
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
        <ButtonText icon={Plus} text="redes sociais" />
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
            Configure suas redes sociais
          </h1>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleCreate)} autoComplete="off">
              <Input.Root className="mb-5" name="slug">
                <Input.Prefix>
                  <InstagramLogo size={20} weight="bold" />
                </Input.Prefix>

                <Input.Input placeholder="Conta do instagram" name="slug" />
              </Input.Root>

              <Input.Root className="mb-5" name="slug">
                <Input.Prefix>
                  <YoutubeLogo size={20} weight="bold" />
                </Input.Prefix>

                <Input.Input placeholder="Canal do Youtube" name="slug" />
              </Input.Root>

              <Input.Root className="mb-5" name="slug">
                <Input.Prefix>
                  <FacebookLogo size={20} weight="bold" />
                </Input.Prefix>

                <Input.Input placeholder="Conta do facebook" name="slug" />
              </Input.Root>

              <Input.Root className="mb-5" name="slug">
                <Input.Prefix>
                  <WhatsappLogo size={20} weight="bold" />
                </Input.Prefix>

                <Input.Input placeholder="Link do seu Whatsapp" name="slug" />
              </Input.Root>

              <Input.Root className="mb-5" name="slug">
                <Input.Prefix>
                  <TiktokLogo size={20} weight="bold" />
                </Input.Prefix>

                <Input.Input placeholder="Usuário do TikTok" name="slug" />
              </Input.Root>

              <Button text="Adicionar" />
            </form>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
