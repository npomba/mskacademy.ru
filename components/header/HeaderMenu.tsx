import stls from '@/styles/components/general/HeaderMenuGeneralHeaderMenu.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderMenuProps = TypeGeneralClassNames

const HeaderMenu = ({ classNames }: TypeHeaderMenuProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            header menu
        </div>
      )
}

export default HeaderMenu