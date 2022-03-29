import stls from '@/styles/components/sections/general/SectionGeneralHero.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { ContextProgramContext } from '@/context/index'
import { Wrapper, Section } from '@/components/layout'
import { FormLead } from '@/components/forms'

type TypeSectionGeneralHeroProps = TypeGeneralClassNames

const SectionGeneralHero = ({ classNames }: TypeSectionGeneralHeroProps) => {
  const { program } = useContext(ContextProgramContext)
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <div className={stls.abovetitle}>КУРС MBA</div>
        <h1 className={stls.title}>
          {program?.title || 'Управление в гостиничном бизнесе'}
        </h1>
        <FormLead />
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralHero
