import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TypeFooterProps = TypeGeneralClassNames

const Footer = ({ classNames }: TypeFooterProps) => {
  return (
    <footer
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>Footer</Wrapper>
    </footer>
  )
}

export default Footer
