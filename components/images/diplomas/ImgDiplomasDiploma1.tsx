import stls from '@/styles/components/images/diplomas/ImgDiplomasDiploma1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/diplomas/ImgDiplomasDiploma1.jpg'

type TypeImgDiplomasDiploma1Props = TypeGeneralClassNames & TypeGeneralImg

const ImgDiplomasDiploma1 = ({
  classNames,
  width,
  height
}: TypeImgDiplomasDiploma1Props) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Диплом'}
      />
    </>
  )
}

export default ImgDiplomasDiploma1
