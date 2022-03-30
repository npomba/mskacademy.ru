import stls from '@/styles/components/icons/general/IconGeneralPointerTop.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralPointerTopProps = TypeGeneralClassNames

const IconGeneralPointerTop = ({
  classNames
}: TypeIconGeneralPointerTopProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 7L7 1L1 7'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconGeneralPointerTop
