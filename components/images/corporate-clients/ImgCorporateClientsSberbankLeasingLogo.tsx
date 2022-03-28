import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsSberbankLeasingLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsSberbankLeasingLogo.png'

type TypeImgCorporateClientsSberbankLeasingLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgCorporateClientsSberbankLeasingLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsSberbankLeasingLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Сбербанк Лизинг'}
      />
    </>
  )
}

export default ImgCorporateClientsSberbankLeasingLogo
