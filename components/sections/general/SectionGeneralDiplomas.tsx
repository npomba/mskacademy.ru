import stls from '@/styles/components/sections/general/SectionGeneralDiplomas.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { ImgDiplomasDiploma1, ImgDiplomasDiploma2 } from '@/components/images'

// TODO: improve styles & make masked decorations behind diplomas the way it's done in figma & add popups to diplomas

type TypeSectionGeneralDiplomasProps = TypeGeneralClassNames

const SectionGeneralDiplomas = ({
  classNames
}: TypeSectionGeneralDiplomasProps) => {
  return (
    <Section
      classNames={[cn(stls.container, classNames)]}
      id={selectors.diplomas}>
      <Wrapper>
        <GeneralSectionTitle
          titleClassNames={[stls.title]}
          subtitleClassNames={[stls.subtitle]}
          subtitle={
            'Вы получите диплом о профессиональной переподготовке установленного образца, который заносится в Федеральный реестр сведений документов об образовании (ФРДО), престижный диплом академии и международное приложение supplement'
          }>
          Выдаваемые дипломы
        </GeneralSectionTitle>
        <div className={stls.diplomas}>
          <ImgDiplomasDiploma1
            classNames={[cn(stls.diploma, stls.ImgDiplomasDiploma1)]}
          />
          <ImgDiplomasDiploma2
            classNames={[cn(stls.diploma, stls.ImgDiplomasDiploma2)]}
          />
        </div>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralDiplomas
