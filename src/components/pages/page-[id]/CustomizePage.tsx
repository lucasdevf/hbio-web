import { ButtonText } from '@/components/ui/ButtonText'
import { Browsers, Camera } from 'phosphor-react'
import { AddContent } from './AddContent'
import { SocialMedias } from './SocialMedias'

export function CustomizePage() {
  return (
    <div className="max-w-sm">
      <div className="flex items-center justify-between">
        <p className="text-lg">Modo edição</p>

        <ButtonText icon={Browsers} text="Modelos prontos" />
      </div>

      <div className="flex flex-col w-full border border-gray-300 rounded-md mt-4 overflow-hidden">
        <div className="flex flex-col flex-1 justify-between items-center p-4">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center space-y-2 mb-8">
              <button className="flex items-center justify-center border-2 border-gray-900 w-20 h-20 rounded-full">
                <Camera size={28} className="text-gray-600" weight="fill" />
              </button>

              <span className="font-medium text-gray-500 text-xs">
                Foto principal
              </span>
            </div>

            <input
              placeholder="Digite o título (Ex.:Seu nome)"
              className="mb-3 text-center w-full outline-none px-auto"
            />

            <input
              placeholder="Digite o subtítulo (Ex.: sua especialidade)"
              className="mb-20 text-center w-full text-gray-800 outline-none"
            />
          </div>

          <SocialMedias />
        </div>

        <AddContent />
      </div>
    </div>
  )
}
