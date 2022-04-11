import { TypeGeneralPhoneValue, TypeGeneralPhoneLink } from '@/types/index'

type TypePhoneNumber = {
  href: TypeGeneralPhoneLink
  val: TypeGeneralPhoneValue
}

const phoneNumber: TypePhoneNumber = {
  href: 'tel:+7-495-149-00-20',
  val: '+7 (495) 149-00-20'
}

export default phoneNumber
