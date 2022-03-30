import truncate from 'truncate'
import { dataGeneralTestimonials } from '@/data/index'

const defaultDescription = truncate(
  dataGeneralTestimonials
    .map(item => `${item.title} ${item.content.toLowerCase()}`)
    .join(', '),
  120
)

export default defaultDescription
