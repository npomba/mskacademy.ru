import stls from '@/styles/components/images/accreditations/ImgAccreditationsRuCoatOfArms.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/accreditations/ImgAccreditationsRuCoatOfArms.png'

type TypeImgAccreditationsRuCoatOfArmsProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgAccreditationsRuCoatOfArms = ({
  classNames,
  width,
  height
}: TypeImgAccreditationsRuCoatOfArmsProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Российский герб'}
      />
    </>
  )
}

export default ImgAccreditationsRuCoatOfArms
