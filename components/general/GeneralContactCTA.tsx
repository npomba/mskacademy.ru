import stls from '@/styles/components/general/GeneralContactCTA.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralEmailLink,
  TypeGeneralEmailValue,
  TypeGeneralPhoneLink,
  TypeGeneralPhoneValue
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralContactCTAProps = TypeGeneralClassNames & {
  href: TypeGeneralPhoneLink | TypeGeneralEmailLink
  value: TypeGeneralPhoneValue | TypeGeneralEmailValue
  lable?: string
  variant: 'size-m' | 'size-xl'
}

const GeneralContactCTA = ({
  classNames,
  href,
  value,
  lable,
  variant
}: TypeGeneralContactCTAProps) => {
  return (
    <a
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      href={href}>
      <span
        className={cn(stls.value, {
          [stls.sizeM]: variant === 'size-m',
          [stls.sizeXL]: variant === 'size-xl'
        })}>
        {value}
      </span>
      {lable && <div className={stls.lable}>{lable}</div>}
    </a>
  )
}

export default GeneralContactCTA
