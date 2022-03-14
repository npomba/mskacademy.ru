import stls from '@/styles/components/icons/general/IconGeneralBurger.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralBurgerProps = TypeGeneralClassNames

const IconGeneralBurger = ({ classNames }: TypeIconGeneralBurgerProps) => {
    return (
        <div
            className={cn(stls.container, getClassNames({ classNames })) || undefined}
            aria-hidden={'true'}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24H42" stroke={colors.alpha} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 12H42" stroke={colors.alpha} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 36H42" stroke={colors.alpha} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default IconGeneralBurger