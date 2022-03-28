import stls from '@/styles/components/images/corporate-clients/ImgCorporateClientsRRLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporate-clients/ImgCorporateClientsRRLogo.png'

type TypeImgCorporateClientsRRLogoProps = TypeGeneralClassNames & TypeGeneralImg

const ImgCorporateClientsRRLogo = ({
  classNames,
  width,
  height
}: TypeImgCorporateClientsRRLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'РЖД'}
      />
    </>
  )
}

export default ImgCorporateClientsRRLogo
