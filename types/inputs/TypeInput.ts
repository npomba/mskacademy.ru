import { FieldError, UseFormRegister } from 'react-hook-form'
import { TypeFormLeadValues } from '@/types/index'

type TypeInput = {
  readonly register: UseFormRegister<TypeFormLeadValues>
  readonly error: FieldError | undefined
}

export default TypeInput
