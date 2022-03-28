import stls from '@/styles/components/images/diplomas/ImgDiplomasDiploma2.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/diplomas/ImgDiplomasDiploma2.jpg'

type TypeImgDiplomasDiploma2Props = TypeGeneralClassNames & TypeGeneralImg

const ImgDiplomasDiploma2 = ({
  classNames,
  width,
  height
}: TypeImgDiplomasDiploma2Props) => {
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

export default ImgDiplomasDiploma2
