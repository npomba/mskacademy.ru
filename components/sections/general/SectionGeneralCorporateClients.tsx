import stls from '@/styles/components/sections/general/SectionGeneralCorporateClients.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionGeneralCorporateClientsProps = TypeGeneralClassNames

const SectionGeneralCorporateClients = ({
  classNames
}: TypeSectionGeneralCorporateClientsProps) => {
  return (
    <Section classNames={[stls.container]}>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Корпоративные клиенты
        </GeneralSectionTitle>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralCorporateClients
