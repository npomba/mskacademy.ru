import stls from '@/styles/components/images/general/ImgGeneralRABOLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/ImgGeneralRABOLogo.png'

type TypeImgGeneralRABOLogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgGeneralRABOLogo = ({
  classNames,
  width,
  height
}: TypeImgGeneralRABOLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'РАБО'}
      />
    </>
  )
}

export default ImgGeneralRABOLogo
