import {
  TypeFormLeadValues,
  TypeGeneralUtms,
  TypeGeneralReferer,
  TypeGeneralYmUid,
  TypeGeneralLeadClientValues
} from '@/types/index'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReset } from 'react-hook-form'
import { hitLeadRoute } from '@/lib/index'

type onSubmitFormProps = {
  readonly formValues: TypeFormLeadValues
  readonly id: string
  readonly asPath: string
  readonly programTitle?: string | null
  reset: UseFormReset<TypeFormLeadValues>
  setLoaderIsOpen: Dispatch<SetStateAction<boolean>>
  setThanksIsOpen: Dispatch<SetStateAction<boolean>>
}

const onSubmitForm = async ({
  formValues,
  id,
  asPath,
  programTitle,
  reset,
  setLoaderIsOpen,
  setThanksIsOpen
}: onSubmitFormProps) => {
  setLoaderIsOpen(true)
  const utms: TypeGeneralUtms = JSON.parse(
    sessionStorage.getItem('utms') || '{}'
  )
  const referer: TypeGeneralReferer = JSON.parse(
    sessionStorage.getItem('referer') || '{}'
  )

  const ymUid: TypeGeneralYmUid = JSON.parse(
    localStorage.getItem('_ym_uid') || '{}'
  )

  sessionStorage.removeItem('utms')
  sessionStorage.removeItem('referer')

  const lead: TypeGeneralLeadClientValues = {
    ...formValues,
    id,
    leadPage: asPath,
    programTitle,
    utms: {
      ...utms,
      utm_term: utms.utm_term && decodeURIComponent(utms.utm_term)
    },
    referer,
    ymUid
  }

  const req = await hitLeadRoute({ lead })
  if (req.status === 200) {
    // console.log(req.data.msg)
    setLoaderIsOpen(false)
    setThanksIsOpen(true)
    reset()
  } else {
    console.log(req.data.msg)
    console.log(req.data.err)
  }
}

export default onSubmitForm
