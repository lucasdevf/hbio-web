import { CustomizePage } from '@/components/pages/page-[id]/CustomizePage'
import { Heading } from '@/components/pages/page-[id]/Heading'
import { TopNavigation } from '@/components/pages/page-[id]/TopNavigation'
import Head from 'next/head'

export default function PageDetails() {
  return (
    <div>
      <Head>
        <title>Hbio | Personalizar página</title>
      </Head>

      <main className="mx-auto max-w-7xl py-8">
        <TopNavigation />

        <Heading />

        <section className="grid grid-cols-2 gap-20 mt-8">
          <CustomizePage />

          <div />
        </section>
      </main>
    </div>
  )
}
