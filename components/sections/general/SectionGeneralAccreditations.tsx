import stls from '@/styles/components/sections/general/SectionGeneralAccreditations.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionGeneralAccreditationsProps = TypeGeneralClassNames

const SectionGeneralAccreditations = ({
  classNames
}: TypeSectionGeneralAccreditationsProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Аккредитации и лицензии
        </GeneralSectionTitle>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralAccreditations
