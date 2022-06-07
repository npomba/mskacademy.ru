import { useState, useEffect } from 'react'
import { sessionStorageKeys } from '@/config/index'

const useSSLocale = () => {
  const [SSLocale, setSSLocale] = useState('')

  useEffect(() => {
    const ssLocale = sessionStorage.getItem(sessionStorageKeys.locale)
    if (ssLocale) {
      setSSLocale(ssLocale)
    }
  }, [])

  return SSLocale
}

export default useSSLocale
