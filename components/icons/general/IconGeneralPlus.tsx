import stls from '@/styles/components/icons/general/IconGeneralLogo.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralLogoProps = TypeGeneralClassNames

const IconGeneralLogo = ({ classNames }: TypeIconGeneralLogoProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 13H25'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 25L13 1'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconGeneralLogo
