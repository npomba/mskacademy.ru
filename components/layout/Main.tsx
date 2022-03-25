import stls from '@/styles/components/layout/Main.module.sass'
import { TypeGeneralChildren, TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeMainProps = TypeGeneralClassNames & TypeGeneralChildren

const Main = ({ classNames, children }: TypeMainProps) => {
  return (
    <main
      id={selectors.main}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </main>
  )
}

export default Main
