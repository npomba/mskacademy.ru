import { routesFront, companyName, defaultDescription } from '@/config/index'

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: routesFront.root,
    site_name: companyName
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: companyName,
  description: defaultDescription,
  canonical: routesFront.root
  // dangerouslySetAllPagesToNoIndex: true,
  // dangerouslySetAllPagesToNoFollow: true
  // noindex: true,
  // nofollow: true
}

export default seo
