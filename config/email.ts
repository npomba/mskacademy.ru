import { TypeGeneralEmailLink, TypeGeneralEmailValue } from '@/types/index'

type TypeEmail = {
  href: TypeGeneralEmailLink
  val: TypeGeneralEmailValue
}

const email: TypeEmail = {
  href: 'mailto:info@mskacademy.ru',
  val: 'info@mskacademy.ru'
}

export default email
