import stls from '@/styles/components/header/HeaderMenuMobile.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderMenuMobileProps = TypeGeneralClassNames

const HeaderMenuMobile = ({ classNames }: TypeHeaderMenuMobileProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
           
        </div>
      )
}

export default HeaderMenuMobile