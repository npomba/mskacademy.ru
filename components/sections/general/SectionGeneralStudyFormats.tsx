import stls from '@/styles/components/sections/general/SectionGeneralStudyFormats.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import selectors from '@/config/selectors'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle, GeneralUIForm } from '@/components/general'

type TypeSectionGeneralStudyFormatsProps = TypeGeneralClassNames

const SectionGeneralStudyFormats = ({
  classNames
}: TypeSectionGeneralStudyFormatsProps) => {
  return (
    <Section
      classNames={[cn(stls.container, classNames)]}
      id={selectors.studyFormats}>
      <Wrapper>
        <GeneralSectionTitle titleClassNames={[stls.title]}>
          форматы обучения
        </GeneralSectionTitle>
        <GeneralUIForm
          title='Оставьте заявку на&nbsp;консультацию c&nbsp;менеджером приемной комиссии'
          explanation='Оставьте заявку и получите консультацию по&nbsp;любому вопросу, узнайте точную стоимость программ, возможные варианты скидок и&nbsp;требования к поступлению'
        />
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralStudyFormats
