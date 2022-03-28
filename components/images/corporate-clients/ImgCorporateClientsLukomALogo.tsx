import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsLukomALogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsLukomALogo.png'

type TypeImgCorporateClientsLukomALogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsLukomALogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsLukomALogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Луком-А'}
      />
    </>
  )
}

export default ImgCorporateClientsLukomALogo
