import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralPrograms,
  SectionGeneralCTA,
  SectionGeneralWeAre,
  SectionGeneralCorporateClients,
  SectionGeneralStudyFormats,
  SectionGeneralAccreditations,
  SectionGeneralDiplomas
} from '@/components/sections'
import { GeneralCopyright } from '@/components/general'

const Home: NextPage = () => {
  return (
    <>
      <SectionGeneralPrograms />
      <SectionGeneralCTA />
      <SectionGeneralWeAre />
      <SectionGeneralCorporateClients />
      <SectionGeneralStudyFormats />
      <SectionGeneralAccreditations />
      <SectionGeneralDiplomas />
      <SectionGeneralCTA />
    </>
  )
}

export default Home
