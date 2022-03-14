import stls from '@/styles/components/icons/general/IconGeneralCross.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralCrossProps = TypeGeneralClassNames

const IconGeneralCross = ({ classNames }: TypeIconGeneralCrossProps) => {
    return (
        <div
            className={cn(stls.container, getClassNames({ classNames })) || undefined}
            aria-hidden={'true'}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 12L12 36" stroke={colors.psi} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 12L36 36" stroke={colors.psi} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default IconGeneralCross