import '@/styles/app.sass'
import { Footer, Header } from '@/components/layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>

    
    <Component {...pageProps} />


    <Footer/>
  </>
  )
}

export default MyApp
