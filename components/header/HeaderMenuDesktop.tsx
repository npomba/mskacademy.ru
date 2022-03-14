import stls from '@/styles/components/header/HeaderMenuDesktop.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderMenuDesktopProps = TypeGeneralClassNames

const HeaderMenuDesktop = ({ classNames }: TypeHeaderMenuDesktopProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
           
        </div>
      )
}

export default HeaderMenuDesktop