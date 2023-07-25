import { Button } from '@/components/ui/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { AddButton } from './AddButton'
import { AddImage } from './AddImage'
import { AddLink } from './AddLink'
import { AddText } from './AddText'
import { SelectType } from './SelectType'

export function AddContent() {
  const [typeSelected, setTypeSelected] = useState('')

  function handleClearTypeSelected() {
    setTypeSelected('')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          text="Adicionar conteúdo na página"
          className="rounded-none w-full"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] focus:outline-none">
          <div className="mb-8 flex justify-end">
            <Dialog.Close>
              <X size={20} />
            </Dialog.Close>
          </div>

          {!typeSelected && <SelectType onSelect={setTypeSelected} />}

          {typeSelected === 'Texto' && (
            <AddText onGoBack={handleClearTypeSelected} />
          )}

          {typeSelected === 'Botão' && (
            <AddButton onGoBack={handleClearTypeSelected} />
          )}

          {typeSelected === 'Link' && (
            <AddLink onGoBack={handleClearTypeSelected} />
          )}

          {typeSelected === 'Imagem' && (
            <AddImage onGoBack={handleClearTypeSelected} />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
