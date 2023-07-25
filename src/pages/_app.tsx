import { HelpButton } from '@/components/shared/HelpButton'
import { Header } from '@/components/ui/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />

      <HelpButton />
    </>
  )
}
