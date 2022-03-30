import stls from '@/styles/components/pages/PagesPageHome.module.sass'
import { NextSeo } from 'next-seo'
import { useContext } from 'react'
import truncate from 'truncate'
import { companyName, routesFront, defaultDescription } from '@/config/index'
import { ContextProgramContext } from '@/context/index'
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
  const { program } = useContext(ContextProgramContext)
  return (
    <>
      <NextSeo
        title={companyName}
        description={truncate(
          program?.whatWillYouLearn?.map(item => item.string).join(', ') ||
            defaultDescription,
          120
        )}
        canonical={`${routesFront.root}/${program?.slug}`}
      />
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
