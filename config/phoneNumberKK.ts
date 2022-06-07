import { TypeGeneralPhoneValue, TypeGeneralPhoneLink } from '@/types/index'

type TypephoneNumberKK = {
  href: TypeGeneralPhoneLink
  val: TypeGeneralPhoneValue
}

const phoneNumberKK: TypephoneNumberKK = {
  href: 'tel:+7-800-500-27-47',
  val: '+7 (800) 500-27-47'
}

export default phoneNumberKK
