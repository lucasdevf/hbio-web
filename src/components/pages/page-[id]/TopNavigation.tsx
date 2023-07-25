import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { LinkBreadcrumbDTO } from '@/dto/LinkBreadcrumbDTO'
import Link from 'next/link'
import { Copy } from 'phosphor-react'

export function TopNavigation() {
  const linksBreadcrumbs: LinkBreadcrumbDTO[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Dr João Fernandes',
      link: '/',
    },
  ]

  return (
    <div className="flex items-center justify-between">
      <Breadcrumbs links={linksBreadcrumbs} />

      <div className="flex items-center space-x-2">
        <Link
          href="https://hbio.com.br/joao-fernandes"
          className="text-blue-600 font-medium"
        >
          https://hbio.com.br/joao-fernandes
        </Link>

        <button>
          <Copy
            weight="fill"
            size={20}
            className="text-gray-500 hover:text-gray-600"
          />
        </button>
      </div>
    </div>
  )
}
