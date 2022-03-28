import stls from '@/styles/components/images/accreditations/ImgAccreditationsECICELLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/accreditations/ImgAccreditationsECICELLogo.png'

type TypeImgAccreditationsECICELLogoProps = TypeGeneralClassNames &
  TypeGeneralImg

const ImgAccreditationsECICELLogo = ({
  classNames,
  width,
  height
}: TypeImgAccreditationsECICELLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'ECICEL'}
      />
    </>
  )
}

export default ImgAccreditationsECICELLogo
