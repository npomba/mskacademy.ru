import stls from '@/styles/components/images/weare/ImgWeAreDecoration2.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/weare/ImgWeAreDecoration2.png'

type TypeImgWeAreDecoration2Props = TypeGeneralClassNames & TypeGeneralImg

const ImgWeAreDecoration2 = ({
  classNames,
  width,
  height
}: TypeImgWeAreDecoration2Props) => {
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

export default ImgWeAreDecoration2
