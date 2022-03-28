import stls from '@/styles/components/sections/general/SectionGeneralStudyFormats.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionGeneralStudyFormatsProps = TypeGeneralClassNames

const SectionGeneralStudyFormats = ({
  classNames
}: TypeSectionGeneralStudyFormatsProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          форматы обучения
        </GeneralSectionTitle>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralStudyFormats
