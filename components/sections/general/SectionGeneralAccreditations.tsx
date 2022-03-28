import stls from '@/styles/components/sections/general/SectionGeneralAccreditations.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import {
  ImgAccreditationsDecoration1,
  ImgAccreditationsDecoration2,
  ImgAccreditationsRABOLogo,
  ImgAccreditationsECICELLogo,
  ImgAccreditationsRuCoatOfArms
} from '@/components/images'

// TODO: improve styles so that logo and text go vertical on laptop

type TypeSectionGeneralAccreditationsProps = TypeGeneralClassNames

const SectionGeneralAccreditations = ({
  classNames
}: TypeSectionGeneralAccreditationsProps) => {
  const list = [
    {
      title: 'Членство в РАБО (Российская Ассоциация Бизнес-образования)',
      image: (
        <ImgAccreditationsRABOLogo
          classNames={[stls.ImgAccreditationsRABOLogo]}
        />
      )
    },
    {
      title: 'Европейская аккредитации Ecicel',
      image: (
        <ImgAccreditationsECICELLogo
          classNames={[stls.ImgAccreditationsECICELLogo]}
        />
      )
    },
    {
      title: 'Государственная лицензия на образовательную деятельность',
      image: (
        <ImgAccreditationsRuCoatOfArms
          classNames={[stls.ImgAccreditationsRuCoatOfArms]}
        />
      )
    }
  ]
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <GeneralSectionTitle classNames={[stls.title]}>
            Аккредитации и лицензии
          </GeneralSectionTitle>
          <p className={stls.p}>
            Академия имеет все необходимые лицензии и аккредитации для
            качественного обучения специалистов международного уровня
          </p>
        </div>
        <ImgAccreditationsDecoration1
          classNames={[stls.ImgAccreditationsDecoration1]}
        />
        <ImgAccreditationsDecoration2
          classNames={[stls.ImgAccreditationsDecoration2]}
        />
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li
              key={`SectionGeneralAccreditations__${item}-${idx}`}
              className={stls.item}>
              {item.image}
              <p className={stls.itemTitle}>{item.title}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralAccreditations
