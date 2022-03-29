import { TypeGeneralAnchor } from '@/types/index'
import { selectors } from '@/config/index'

type TypeDataGeneralMenuLinks = {
  title: string
  href: TypeGeneralAnchor
}[]

const dataGeneralMenuLinks: TypeDataGeneralMenuLinks = [
  {
    title: 'Программы',
    href: `#${selectors.programs}`
  },
  {
    title: 'Об академии',
    href: `#${selectors.about}`
  },
  {
    title: 'Дипломы',
    href: `#${selectors.diplomas}`
  }
]

export default dataGeneralMenuLinks
