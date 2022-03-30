import { routesFront, companyName } from '@/config/index'
import { dataGeneralTestimonials } from '@/data/index'

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: routesFront.root,
    site_name: companyName
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: companyName,
  description: dataGeneralTestimonials
    .map(item => `${item.title} ${item.content.toLowerCase()}`)
    .join(', '),
  canonical: routesFront.root
  // dangerouslySetAllPagesToNoIndex: true,
  // dangerouslySetAllPagesToNoFollow: true
  // noindex: true,
  // nofollow: true
}

export default seo
