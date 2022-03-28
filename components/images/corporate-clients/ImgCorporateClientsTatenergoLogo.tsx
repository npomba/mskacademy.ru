import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsTatenergoLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsTatenergoLogo.png'

type TypeImgCorporateClientsTatenergoLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsTatenergoLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsTatenergoLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Татэнерго'}
      />
    </>
  )
}

export default ImgCorporateClientsTatenergoLogo
