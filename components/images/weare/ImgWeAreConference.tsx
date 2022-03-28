import stls from '@/styles/components/images/weare/ImgWeAreConference.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/weare/ImgWeAreConference.jpg'

type TypeImgWeAreConferenceProps = TypeGeneralClassNames & TypeGeneralImg

const ImgWeAreConference = ({
  classNames,
  width,
  height
}: TypeImgWeAreConferenceProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Конференция'}
      />
    </>
  )
}

export default ImgWeAreConference
