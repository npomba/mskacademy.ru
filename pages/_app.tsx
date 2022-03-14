import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { Header } from '@/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
