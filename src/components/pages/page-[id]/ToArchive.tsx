import { Button } from '@/components/ui/Button'
import { ButtonText } from '@/components/ui/ButtonText'
import * as Dialog from '@radix-ui/react-dialog'
import { Archive, WarningCircle, X } from 'phosphor-react'

export function ToArchive() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ButtonText icon={Archive} text="Arquivar página" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] focus:outline-none">
          <div className="mb-8 flex justify-end">
            <Dialog.Close>
              <X size={20} />
            </Dialog.Close>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-1 mb-4 bg-gray-100 text-gray-600 p-2 rounded-md font-medium text-sm">
              <WarningCircle weight="bold" size={16} />

              <span className="flex">
                Após arquivar, sua página ficará inacessível
              </span>
            </div>

            <span>Deseja realmente arquivar essa página?</span>

            <footer className="flex justify-end space-x-10 mt-7">
              <Dialog.Close>
                <ButtonText text="Cancelar" />
              </Dialog.Close>

              <Button text="Arquivar" />
            </footer>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
