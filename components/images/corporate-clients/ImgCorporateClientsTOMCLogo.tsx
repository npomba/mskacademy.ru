import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsTOMCLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsTOMCLogo.png'

type TypeImgCorporateClientsTOMCLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsTOMCLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsTOMCLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'ТОМС'}
      />
    </>
  )
}

export default ImgCorporateClientsTOMCLogo
