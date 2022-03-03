import stls from '@/styles/components/layout/Main.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeMainProps = TypeClassNames & TypeChildren

const Main = ({ classNames, children }: TypeMainProps) => {
  return (
    <main
      id={selectors.main}
      className={cn([stls.container], getClassNames({ classNames }))}>
      {children}
    </main>
  )
}

export default Main