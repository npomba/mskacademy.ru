import stls from '@/styles/components/images/accreditations/ImgAccreditationsDecoration2.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/accreditations/ImgAccreditationsDecoration2.png'

type TypeImgAccreditationsDecoration2Props = TypeGeneralClassNames &
  TypeGeneralImg

const ImgAccreditationsDecoration2 = ({
  classNames,
  width,
  height
}: TypeImgAccreditationsDecoration2Props) => {
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

export default ImgAccreditationsDecoration2
