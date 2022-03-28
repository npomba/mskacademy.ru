import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsRossetiLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsRossetiLogo.png'

type TypeImgCorporateClientsRossetiLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsRossetiLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsRossetiLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Россети'}
      />
    </>
  )
}

export default ImgCorporateClientsRossetiLogo
