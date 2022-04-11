import { TypeGeneralPhoneValue, TypeGeneralPhoneLink } from '@/types/index'

type TypePhoneNumber = {
  href: TypeGeneralPhoneLink
  val: TypeGeneralPhoneValue
}

const phoneNumber: TypePhoneNumber = {
  href: 'tel:+7-495-120-02-97',
  val: '+7 (495) 197-02-20'
}

export default phoneNumber
