import stls from '@/styles/components/layout/Wrapper.module.sass'
import { TypeGeneralChildren, TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeWrapperProps = TypeGeneralClassNames & TypeGeneralChildren

const Wrapper = ({ classNames, children }: TypeWrapperProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default Wrapper
