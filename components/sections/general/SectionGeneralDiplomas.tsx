import stls from '@/styles/components/sections/general/SectionGeneralDiplomas.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionGeneralDiplomasProps = TypeGeneralClassNames

const SectionGeneralDiplomas = ({
  classNames
}: TypeSectionGeneralDiplomasProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Выдаваемые дипломы
        </GeneralSectionTitle>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralDiplomas
