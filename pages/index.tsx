import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { SectionGeneralWeAre } from '@/components/sections'
import { GeneralCopyright } from '@/components/general'

const Home: NextPage = () => {
  return (
    <>
      <GeneralCopyright/>
      <SectionGeneralWeAre />
    </>
  )
}

export default Home
