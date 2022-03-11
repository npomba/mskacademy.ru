import stls from '@/styles/components/header/HeaderModileMenu.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderModileMenuProps = TypeGeneralClassNames

const HeaderModileMenu = ({ classNames }: TypeHeaderModileMenuProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
           
        </div>
      )
}

export default HeaderModileMenu