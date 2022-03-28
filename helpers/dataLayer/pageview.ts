import { TypeGeneralRoute } from '@/types/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypePageviewProps = {
  url: TypeGeneralRoute
}

const pageview = ({ url }: TypePageviewProps) => {
  // TODO: get rid of line below
  // @ts-expect-error
  window.dataLayer?.push({
    event: 'pageview',
    page: url
  })
}

export default pageview
