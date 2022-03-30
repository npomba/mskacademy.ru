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
      <SectionGeneralCTA
        title='Не нашли нужную программу?'
        subtitle='Наши специалисты помогут!'
        explanation='Оставьте заявку и наши специалисты Вам помогут подобрать нужную программу, а также ответят 
        на&nbsp;вопросы, расскажут о возможных вариантах скидок и требованиях к поступлению'
      />
      <SectionGeneralWeAre />
      <SectionGeneralCorporateClients />
      <SectionGeneralStudyFormats />
      <SectionGeneralAccreditations />
      <SectionGeneralDiplomas />
      <SectionGeneralCTA
        title='Возможно учиться в рассрочку на 12 месяцев без переплат'
        desc='Оставьте заявку и получите консультацию по рассрочке, узнайте точную стоимость программ, возможные варианты скидок и требования к поступлению'
        explanationXl='0%'
      />
    </>
  )
}

export default PagesPageHome
