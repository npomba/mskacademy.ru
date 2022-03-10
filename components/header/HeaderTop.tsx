import stls from '@/styles/components/general/HeaderTop.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderTopProps = TypeGeneralClassNames

const HeaderTop = ({ classNames }: TypeHeaderTopProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            header top
        </div>
      )
}

export default HeaderTop