import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { Header, Main, Footer } from '@/components/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* TODO: view header to make sure structure & styles are right */}
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default App
