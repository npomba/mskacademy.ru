import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { HeaderTop, HeaderMenu, HeaderModileMenu } from '@/components/general'




type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
 
 

  return (
    <header className={cn(stls.container, getClassNames({ classNames })) || undefined }>
        <HeaderTop/>
        <HeaderMenu/>
        <HeaderModileMenu/>
    </header>
  )
}

export default Header