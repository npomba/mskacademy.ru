import stls from '@/styles/components/images/general/ImgGeneralECTSLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/ImgGeneralECTSLogo.png'

type TypeImgGeneralECTSLogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgGeneralECTSLogo = ({
  classNames,
  width,
  height
}: TypeImgGeneralECTSLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'ECTS'}
      />
    </>
  )
}

export default ImgGeneralECTSLogo
