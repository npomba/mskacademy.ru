import stls from '@/styles/components/images/accreditations/ImgAccreditationsRABOLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/accreditations/ImgAccreditationsRABOLogo.png'

type TypeImgAccreditationsRABOLogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgAccreditationsRABOLogo = ({
  classNames,
  width,
  height
}: TypeImgAccreditationsRABOLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'РАБО'}
      />
    </>
  )
}

export default ImgAccreditationsRABOLogo
