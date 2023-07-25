import { LinkBreadcrumbDTO } from '@/dto/LinkBreadcrumbDTO'
import Link from 'next/link'

interface Props {
  links: LinkBreadcrumbDTO[]
}

export function Breadcrumbs({ links }: Props) {
  return (
    <div>
      {links
        .filter((_, index) => index < links.length - 1)
        .map((link) => (
          <Link key={link.link} href={link.link} className="mr-1">
            <span className="text-blue-600 hover:underline font-medium">
              {link.name}
            </span>{' '}
            /
          </Link>
        ))}

      <span>{links[links.length - 1].name}</span>
    </div>
  )
}
