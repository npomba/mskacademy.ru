import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import {
  TypeGeneralClassNames,
  TypeFormVariant,
  TypeFormLeadValues
} from '@/types/index'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getClassNames } from '@/helpers/index'
import { BtnAlpha } from '@/components/btns'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeInputSubmitProps = TypeGeneralClassNames &
  TypeFormVariant & {
    errors: {
      [key in keyof TypeFormLeadValues]?: FieldError | undefined
    }
  }

const InputSubmit = ({ classNames, variant, errors }: TypeInputSubmitProps) => {
  const isError = !!errors.name || !!errors.phone || !!errors.email

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <BtnAlpha
        type='submit'
        variant={variant === 'beta' ? 'gamma-reverse' : 'alpha'}
        ariaLabel='Оставить заявку'>
        Оставить заявку
      </BtnAlpha>
    </div>
  )
}

export default InputSubmit
