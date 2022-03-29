import stls from '@/styles/components/sections/general/SectionGeneralCorporateClients.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import selectors from '@/config/selectors'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import {
  ImgCorporateClientsHHLogo,
  ImgCorporateClientsRosneftLogo,
  ImgCorporateClientsRossetiLogo,
  ImgCorporateClientsRRLogo,
  ImgCorporateClientsTatenergoLogo,
  ImgCorporateClientsTOMCLogo,
  ImgCorporateClientsSberbankLeasingLogo,
  ImgCorporateClientsLukomALogo
} from '@/components/images'

type TypeSectionGeneralCorporateClientsProps = TypeGeneralClassNames

const SectionGeneralCorporateClients = ({
  classNames
}: TypeSectionGeneralCorporateClientsProps) => {
  const clients = [
    {
      title: 'hh.ru',
      logo: <ImgCorporateClientsHHLogo />
    },
    {
      title: 'RussianRailways',
      logo: <ImgCorporateClientsRRLogo />
    },
    {
      title: 'Rosneft',
      logo: <ImgCorporateClientsRosneftLogo />
    },
    {
      title: 'Rosseti',
      logo: <ImgCorporateClientsRossetiLogo />
    },
    {
      title: 'Tatenergo',
      logo: <ImgCorporateClientsTatenergoLogo />
    },
    {
      title: 'TOMC',
      logo: <ImgCorporateClientsTOMCLogo />
    },
    {
      title: 'SberbankLeasing',
      logo: <ImgCorporateClientsSberbankLeasingLogo />
    },
    {
      title: 'LukomA',
      logo: <ImgCorporateClientsLukomALogo />
    }
  ]

  return (
    <Section
      classNames={[cn(stls.container, classNames)]}
      id={selectors.clients}>
      <Wrapper>
        <GeneralSectionTitle titleClassNames={[stls.title]}>
          Корпоративные клиенты
        </GeneralSectionTitle>
        <ul className={stls.clients}>
          {clients.map((client, idx) => (
            <li
              key={`SectionGeneralCorporateClients__client-${client.title}-${idx}`}
              className={stls.client}>
              {client.logo}
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralCorporateClients
