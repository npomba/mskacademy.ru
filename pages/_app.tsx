import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { Header, Main, Footer } from '@/components/layout'
import { ContextProgramsState, ContextProgramState } from '@/context/index'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* TODO: view header to make sure structure & styles are right */}
      <ContextProgramsState>
        <ContextProgramState>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ContextProgramState>
      </ContextProgramsState>
    </>
  )
}

export default App
