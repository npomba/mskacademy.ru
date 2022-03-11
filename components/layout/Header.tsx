import stls from '@/styles/components/layout/Header.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { HeaderTop, HeaderMenu, HeaderModileMenu } from '@/components/header'




type TypeHeaderProps = TypeGeneralClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
 
 

  return (
    <header className={cn(stls.container, getClassNames({ classNames })) || undefined }>
        <HeaderTop/>
        {/* <HeaderMenu/>
        <HeaderModileMenu/> */}
    </header>
  )
}

export default Header