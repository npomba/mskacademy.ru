import { TypeGeneralReferer } from '@/types/index'

const handleReferer = () => {
  const referer: TypeGeneralReferer = sessionStorage.getItem('referrer')
  if (!referer) {
    sessionStorage.setItem('referer', JSON.stringify(document.referrer))
  }
}

export default handleReferer
