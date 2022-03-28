import stls from '@/styles/components/images/general/ImgGeneralGMDELogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/ImgGeneralGMDELogo.png'

type TypeImgGeneralGMDELogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgGeneralGMDELogo = ({
  classNames,
  width,
  height
}: TypeImgGeneralGMDELogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Департамент образования города Москвы'}
      />
    </>
  )
}

export default ImgGeneralGMDELogo
