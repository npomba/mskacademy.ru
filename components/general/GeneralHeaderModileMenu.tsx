import stls from '@/styles/components/general/GeneralHeaderModileMenu.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralHeaderModileMenuProps = TypeGeneralClassNames

const GeneralHeaderModileMenu = ({ classNames }: TypeGeneralHeaderModileMenuProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            HeaderModileMenu
        </div>
      )
}

export default GeneralHeaderModileMenu