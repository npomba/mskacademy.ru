import stls from '@/styles/components/sections/general/SectionGeneralCTA.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralGeneralUIFormProps
} from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralUIForm } from '@/components/general'

type TypeSectionGeneralCTAProps = TypeGeneralClassNames &
  TypeGeneralGeneralUIFormProps

const SectionGeneralCTA = ({
  classNames,
  title,
  subtitle,
  desc,
  explanation,
  explanationXl
}: TypeSectionGeneralCTAProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <GeneralUIForm
          h2
          title={title}
          subtitle={subtitle}
          desc={desc}
          explanation={explanation}
          explanationXl={explanationXl}
        />
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralCTA
