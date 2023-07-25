import { Button } from '@/components/ui/Button'
import { ToArchive } from './ToArchive'

export function Heading() {
  return (
    <div className="flex items-center justify-between mt-8">
      <h1 className="text-2xl font-medium">Personalizar página</h1>

      <div className="flex items-center space-x-10">
        <ToArchive />

        <Button text="Editar link" />
      </div>
    </div>
  )
}
