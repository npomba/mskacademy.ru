import stls from '@/styles/components/imgs/general/ImgGeneralMoscowDepartmentOfEducation.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/imgs/logo.png'

type TypeIconGeneralMoscowDepartmentOfEducationProps = TypeGeneralClassNames & TypeGeneralImg

const ImgGeneralMoscowDepartmentOfEducation = ({
  classNames,
  width,
  height
}: TypeIconGeneralMoscowDepartmentOfEducationProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Департамент образования города Москвы'}
      />
    </>
  )
}

export default ImgGeneralMoscowDepartmentOfEducation
