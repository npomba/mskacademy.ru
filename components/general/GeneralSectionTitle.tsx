import stls from '@/styles/components/general/GeneralSectionTitle.module.sass'
import { ReactNode } from 'react'
import { TypeGeneralClassNames, TypeGeneralChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralSectionTitleProps = TypeGeneralClassNames &
  TypeGeneralChildren & {
    subtitle?: ReactNode
    titleClassNames?: string[]
    subtitleClassNames?: string[]
  }

const GeneralSectionTitle = ({
  classNames,
  children,
  subtitle,
  titleClassNames,
  subtitleClassNames
}: TypeGeneralSectionTitleProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.subtitle]: !!subtitle },
          getClassNames({ classNames })
        ) || undefined
      }>
      <h2
        className={
          cn(stls.title, getClassNames({ classNames: titleClassNames })) ||
          undefined
        }>
        {children}
      </h2>
      {subtitle && (
        <p
          className={
            cn(stls.p, getClassNames({ classNames: subtitleClassNames })) ||
            undefined
          }>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default GeneralSectionTitle
