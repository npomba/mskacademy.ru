import { ReactNode } from 'react'
import { TypeFormVariant, TypeFormIsPopup } from '@/types/index'

type TypeGeneralGeneralUIFormProps = {
  title?: ReactNode
  subtitle?: ReactNode
  h2?: boolean
  desc?: ReactNode
  explanation?: ReactNode
  explanationXl?: ReactNode
} & TypeFormVariant &
  TypeFormIsPopup

export default TypeGeneralGeneralUIFormProps
