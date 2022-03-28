import stls from '@/styles/components/images/weare/ImgWeAreDecoration1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
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
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Студенты'}
      />
    </>
  )
}

export default ImgWeAreDecoration1
