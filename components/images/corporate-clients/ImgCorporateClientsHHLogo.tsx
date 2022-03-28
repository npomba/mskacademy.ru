import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsHHLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsHHLogo.png'

type TypeImgCorporateClientsHHLogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgCorporateClientsHHLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsHHLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'hh.ru'}
      />
    </>
  )
}

export default ImgCorporateClientsHHLogo
