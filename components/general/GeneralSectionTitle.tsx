import stls from '@/styles/components/general/GeneralSectionTitle.module.sass'
import { TypeGeneralClassNames, TypeGeneralChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralSectionTitleProps = TypeGeneralClassNames & TypeGeneralChildren

const GeneralSectionTitle = ({
  classNames,
  children
}: TypeGeneralSectionTitleProps) => {
  return (
    <h2
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h2>
  )
}

export default GeneralSectionTitle
