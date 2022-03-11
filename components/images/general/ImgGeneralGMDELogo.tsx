import stls from '@/styles/components/imgs/ImgGeneralGMDELogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/imgs/logo.png'

type TypeImgGeneralGMDELogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgGeneralGMDELogo = ({
  classNames,
  width,
  height
}: TypeImgGeneralGMDELogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Департамент образования города Москвы'}
      />
    </>
  )
}

export default ImgGeneralGMDELogo
