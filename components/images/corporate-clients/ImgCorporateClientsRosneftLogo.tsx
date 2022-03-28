import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsRosneftLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsRosneftLogo.png'

type TypeImgCorporateClientsRosneftLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsRosneftLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsRosneftLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Роснефть'}
      />
    </>
  )
}

export default ImgCorporateClientsRosneftLogo
