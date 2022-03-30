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
      <SectionGeneralWeAre />
      <SectionGeneralCorporateClients />
      <SectionGeneralStudyFormats />
      <SectionGeneralAccreditations />
      <SectionGeneralDiplomas />
      <SectionGeneralCTA
        title='Возможно учиться в рассрочку на 12 месяцев без переплат'
        desc='Оставьте заявку и получите консультацию по рассрочке, узнайте точную стоимость программ, возможные варианты скидок и требования к поступлению'
        explanationXl='0%'
        variant='beta'
      />
    </>
  )
}

export default PagesPageHome
