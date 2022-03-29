import stls from '@/styles/components/images/general/ImgGeneralCircleDecoration.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/ImgGeneralCircleDecoration.png'

type TypeImgGeneralCircleDecorationProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgGeneralCircleDecoration = ({
  classNames,
  width,
  height
}: TypeImgGeneralCircleDecorationProps) => {
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

export default ImgGeneralCircleDecoration
