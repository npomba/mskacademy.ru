import stls from '@/styles/components/pages/PagesPageHome.module.sass'
import {
  SectionGeneralHero,
  SectionGeneralPrograms,
  SectionGeneralCTA,
  SectionGeneralWeAre,
  SectionGeneralCorporateClients,
  SectionGeneralStudyFormats,
  SectionGeneralAccreditations,
  SectionGeneralDiplomas
} from '@/components/sections'

const PagesPageHome = () => {
  return (
    <>
      <SectionGeneralHero />
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

export default PagesPageHome
