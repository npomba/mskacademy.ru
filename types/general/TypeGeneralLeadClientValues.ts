import {
  TypeFormLeadValues,
  TypeGeneralUtms,
  TypeGeneralReferer
} from '@/types/index'

type TypeGeneralLeadClientValues = TypeFormLeadValues & {
  readonly id: string
  readonly programTitle?: string | null
  readonly leadPage: string
  readonly utms: TypeGeneralUtms
  readonly referer: TypeGeneralReferer
}

export default TypeGeneralLeadClientValues
