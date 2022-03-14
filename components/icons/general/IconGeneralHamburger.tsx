import stls from '@/styles/components/icons/general/IconGeneralHamburger.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralHamburgerProps = TypeGeneralClassNames

const IconGeneralHamburger = ({
  classNames
}: TypeIconGeneralHamburgerProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 24H42'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 12H42'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 36H42'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconGeneralHamburger
