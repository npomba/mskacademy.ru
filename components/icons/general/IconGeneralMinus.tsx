import stls from '@/styles/components/icons/general/IconGeneralMinus.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralMinusProps = TypeGeneralClassNames

const IconGeneralMinus = ({ classNames }: TypeIconGeneralMinusProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 26 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 1H25'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconGeneralMinus
