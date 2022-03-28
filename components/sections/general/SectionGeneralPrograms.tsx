import stls from '@/styles/components/sections/general/SectionGeneralPrograms.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionGeneralProgramsProps = TypeGeneralClassNames

const SectionGeneralPrograms = ({
  classNames
}: TypeSectionGeneralProgramsProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Направления обучения
        </GeneralSectionTitle>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralPrograms
