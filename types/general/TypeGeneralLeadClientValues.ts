import {
  TypeFormLeadValues,
  TypeGeneralUtms,
  TypeGeneralReferer,
  TypeGeneralYmUid
} from '@/types/index'

type TypeGeneralLeadClientValues = TypeFormLeadValues & {
  readonly id: string
  readonly programTitle?: string | null
  readonly leadPage: string
  readonly utms: TypeGeneralUtms
  readonly referer: TypeGeneralReferer
  readonly ymUid: TypeGeneralYmUid
}

export default TypeGeneralLeadClientValues
