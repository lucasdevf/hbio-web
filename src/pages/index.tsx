import { CreatePage } from '@/components/pages/index/CreatePage'
import { PageCard } from '@/components/pages/index/PageCard'
import { PageDTO } from '@/dto/PageDTO'
import Head from 'next/head'

export default function Home() {
  const pages: PageDTO[] = [
    {
      id: '1',
      name: 'Dr João Fernandes',
      link: 'https://hbio.com/dr-joao-fernandes',
      status: 'online',
      archived: false,
    },
    {
      id: '2',
      name: 'Teste',
      link: 'https://hbio.com/teste',
      status: 'offline',
      archived: true,
    },
  ]

  return (
    <div>
      <Head>
        <title>Hbio | Suas páginas</title>
      </Head>

      <main className="mx-auto max-w-7xl py-8">
        <h1 className="text-2xl font-medium">Suas páginas</h1>

        <div className="grid grid-cols-4 gap-5 mt-8">
          <CreatePage />

          {pages.map((page) => (
            <PageCard key={page.id} data={page} />
          ))}
        </div>
      </main>
    </div>
  )
}
