import stls from '@/styles/components/layout/Section.module.sass'
import { TypeGeneralClassNames, TypeGeneralChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeSectionProps = TypeGeneralClassNames & TypeGeneralChildren

const Section = ({ classNames, children }: TypeSectionProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </section>
  )
}

export default Section
