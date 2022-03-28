import stls from '@/styles/components/images/weare/ImgWeAreStudents.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/weare/ImgWeAreStudents.jpg'

type TypeImgWeAreStudentsProps = TypeGeneralClassNames & TypeGeneralImg

const ImgWeAreStudents = ({
  classNames,
  width,
  height
}: TypeImgWeAreStudentsProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Студенты'}
      />
    </>
  )
}

export default ImgWeAreStudents
