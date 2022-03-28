import stls from '@/styles/components/sections/general/SectionGeneralCTA.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'

type TypeSectionGeneralCTAProps = TypeGeneralClassNames

const SectionGeneralCTA = ({ classNames }: TypeSectionGeneralCTAProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>SectionGeneralCTA</Wrapper>
    </Section>
  )
}

export default SectionGeneralCTA
