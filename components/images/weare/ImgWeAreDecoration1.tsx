import stls from '@/styles/components/images/weare/ImgWeAreDecoration1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/weare/ImgWeAreDecoration1.png'

type TypeImgWeAreDecoration1Props = TypeGeneralClassNames & TypeGeneralImg

const ImgWeAreDecoration1 = ({
  classNames,
  width,
  height
}: TypeImgWeAreDecoration1Props) => {
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

export default ImgWeAreDecoration1
