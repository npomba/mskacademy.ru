import stls from '@/styles/components/general/GeneralCopyright.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'



type TypeGeneralCopyrightProps = TypeGeneralClassNames

const GeneralCopyright = ({ classNames }: TypeGeneralCopyrightProps) => {

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <p className={stls.text}>© Столичная Бизнес Академия, 2021</p>
        </div>
    )
}

export default GeneralCopyright