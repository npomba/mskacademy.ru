import stls from '@/styles/components/icons/general/IconGeneralCross.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralCrossProps = TypeGeneralClassNames

const IconGeneralCross = ({ classNames }: TypeIconGeneralCrossProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <path
          d='M25 1L1 25'
          stroke={colors.psi}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 1L25 25'
          stroke={colors.psi}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconGeneralCross
