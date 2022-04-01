import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { TypeGeneralRoute } from '@/types/index'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from 'seo.config'
import { routesFront, selectors, gtm, prod } from '@/config/index'
import { handleUtms, handleReferer, pageview } from '@/helpers/index'
import { Header, Main, Footer } from '@/components/layout'
import {
  ContextProgramsState,
  ContextProgramState,
  ContextMenuState
} from '@/context/index'
import { GeneralHeroDecorations } from '@/components/general'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState(false)

  if (prod) {
    console.log = () => {}
  }

  useEffect(() => {
    handleUtms({ router })
    handleReferer()

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = (url: TypeGeneralRoute) => {
      NProgress.done()
      setLoading(false)
      pageview({ url })
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [router])

  return (
    <>
      {/* TODO: view header to make sure structure & styles are right */}
      <DefaultSeo {...SEO} />
      {/* <LogoJsonLd
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`}
        url={routesFront.root}
      /> */}
      <ContextMenuState>
        <ContextProgramsState>
          <ContextProgramState>
            <div className={'page-wrapper'}>
              <Header />
              <GeneralHeroDecorations classNames={['decorations']} />
              <Main>
                <Component {...pageProps} />
              </Main>
              <Footer />
            </div>
          </ContextProgramState>
        </ContextProgramsState>
      </ContextMenuState>
      {prod && (
        <Script
          id={selectors.gtm}
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtm}');`
          }}
        />
      )}
    </>
  )
}

export default App
