import { TypeGeneralPhoneValue, TypeGeneralPhoneLink} from "@/types/index"

type TypePhoneNumber = {
    href: TypeGeneralPhoneLink
    val: TypeGeneralPhoneValue
  }
  
  const phoneNumber: TypePhoneNumber = {
    href: 'tel:+7-495-648-62-26',
    val: '+7 (495) 648-62-26'
  }
  
  export default phoneNumber