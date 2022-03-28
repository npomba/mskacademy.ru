import stls from '@/styles/components/images/accreditations/ImgAccreditationsDecoration1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/accreditations/ImgAccreditationsDecoration1.png'

type TypeImgAccreditationsDecoration1Props = TypeGeneralClassNames &
  TypeGeneralImg

const ImgAccreditationsDecoration1 = ({
  classNames,
  width,
  height
}: TypeImgAccreditationsDecoration1Props) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Декорация'}
      />
    </>
  )
}

export default ImgAccreditationsDecoration1
