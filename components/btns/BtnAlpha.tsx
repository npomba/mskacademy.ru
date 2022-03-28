import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import { TypeBtn } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import Link from 'next/link'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeBtnAlphaProps = TypeBtn

const BtnAlpha = ({
  classNames,
  children,
  tag = 'button',
  href,
  type,
  disabled,
  ariaLabel,
  variant,
  onClick,
  scroll
}: TypeBtnAlphaProps) => {
  const isLink = tag === 'Link'

  const container =
    cn(
      stls.container,
      {
        [stls.alpha]: variant === 'alpha',
        [stls['alpha-reverse']]: variant === 'alpha-reverse',
        [stls.beta]: variant === 'beta',
        [stls['beta-reverse']]: variant === 'beta-reverse',
        [stls.gamma]: variant === 'gamma',
        [stls['gamma-reverse']]: variant === 'gamma-reverse',
        [stls.delta]: variant === 'delta',
        [stls['delta-reverse']]: variant === 'delta-reverse',
        [stls.epsilon]: variant === 'epsilon',
        [stls['epsilon-reverse']]: variant === 'epsilon-reverse',
        [stls.zeta]: variant === 'zeta',
        [stls['zeta-reverse']]: variant === 'zeta-reverse',
        [stls.disabled]: disabled
      },
      getClassNames({ classNames })
    ) || undefined

  const ParentElement = isLink ? Link : tag
  return (
    <ParentElement
      className={!isLink && container}
      type={type}
      href={href}
      scroll={isLink ? scroll : undefined}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}>
      {isLink ? <a className={container}>{children}</a> : children}
    </ParentElement>
  )
}

export default BtnAlpha
