import stls from '@/styles/components/images/weare/ImgWeAreRoom.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/weare/ImgWeAreRoom.jpg'

type TypeImgWeAreRoomProps = TypeGeneralClassNames & TypeGeneralImg

const ImgWeAreRoom = ({ classNames, width, height }: TypeImgWeAreRoomProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Аудитория'}
      />
    </>
  )
}

export default ImgWeAreRoom
