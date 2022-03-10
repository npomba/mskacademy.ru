import { TypeGeniralPhoneValue, TypeGeniralPhoneLink} from "@/types/index"

type TypePhoneNumber = {
    href: TypeGeniralPhoneLink
    val: TypeGeniralPhoneValue
  }
  
  const phoneNumber: TypePhoneNumber = {
    href: 'tel:+7-495-648-62-26',
    val: '+7 (495) 648-62-26'
  }
  
  export default phoneNumber