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
      <svg
        viewBox='0 0 18 18'
        fill='none'
        aria-hidden={'true'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.292893 16.2929C-0.0976309 16.6834 -0.0976309 17.3166 0.292893 17.7071C0.683418 18.0976 1.31658 18.0976 1.70711 17.7071L0.292893 16.2929ZM17.5563 1.44365C17.5563 0.891366 17.1086 0.443651 16.5563 0.443652L7.55635 0.443651C7.00407 0.443652 6.55635 0.891367 6.55635 1.44365C6.55635 1.99594 7.00407 2.44365 7.55635 2.44365L15.5563 2.44365L15.5563 10.4436C15.5563 10.9959 16.0041 11.4436 16.5563 11.4436C17.1086 11.4436 17.5563 10.9959 17.5563 10.4436L17.5563 1.44365ZM1.70711 17.7071L17.2635 2.15076L15.8492 0.736544L0.292893 16.2929L1.70711 17.7071Z'
          fill={colors.psi}
        />
      </svg>
    </div>
  )
}

export default IconGeneralCross
