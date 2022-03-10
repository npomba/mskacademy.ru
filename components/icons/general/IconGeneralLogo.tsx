import stls from '@/styles/components/icons/general/IconGeneralLogo.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeneralLogoProps = TypeClassNames

const IconGeneralLogo = ({ classNames }: TypeIconGeneralLogoProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 46 75' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect y='42.8656' width='3.84408' height='31.8924' fill={colors.psi} />
        <rect
          x='41.5161'
          y='42.8656'
          width='3.84408'
          height='31.8924'
          fill={colors.psi}
        />
        <rect
          x='27.6774'
          y='32.2956'
          width='3.84408'
          height='42.4624'
          fill={colors.psi}
        />
        <rect
          x='20.7581'
          y='18.6274'
          width='3.84408'
          height='56.1306'
          fill={colors.psi}
        />
        <rect
          x='13.8387'
          y='32.2956'
          width='3.84408'
          height='42.4624'
          fill={colors.psi}
        />
        <rect
          x='34.5967'
          y='39.7675'
          width='3.84408'
          height='34.9905'
          fill={colors.psi}
        />
        <rect
          x='6.91937'
          y='39.7675'
          width='3.84408'
          height='34.9905'
          fill={colors.psi}
        />
        <path
          d='M22.4031 0L23.9807 5.47779H29.0859L24.9557 8.86325L26.5333 14.341L22.4031 10.9556L18.2729 14.341L19.8505 8.86325L15.7203 5.47779H20.8255L22.4031 0Z'
          fill={colors.psi}
        />
      </svg>
    </div>
  )
}

export default IconGeneralLogo
