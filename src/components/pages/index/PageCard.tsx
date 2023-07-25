import { PageDTO } from '@/dto/PageDTO'
import Link from 'next/link'

interface Props {
  data: PageDTO
}

export function PageCard({ data }: Props) {
  const { id, name, link, status, archived } = data

  return (
    <Link
      href="/page/123"
      className="flex flex-col justify-end space-y-2 p-6 hover:bg-gray-50 cursor-pointer border border-gray-300 rounded-md h-96"
    >
      <p className="font-semibold">{name}</p>

      <span className="font-medium text-blue-600">{link}</span>

      <footer className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div
            data-status={status}
            className="w-3 h-3 data-[status=online]:bg-green-500 data-[status=offline]:bg-red-500 rounded-full"
          />

          <p>{status}</p>
        </div>

        {archived && (
          <span className="text-xs bg-gray-100 p-1.5 rounded-md font-semibold text-gray-600">
            Arquivada
          </span>
        )}
      </footer>
    </Link>
  )
}
