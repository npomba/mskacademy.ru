import stls from '@/styles/components/layout/Section.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralChildren,
  TypeGeneralElementId
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeSectionProps = TypeGeneralClassNames &
  TypeGeneralChildren &
  TypeGeneralElementId

const Section = ({ classNames, children, id }: TypeSectionProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      id={id}>
      {children}
    </section>
  )
}

export default Section
