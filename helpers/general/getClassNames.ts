import { TypeGeneralClassNames } from '@/types/index'

type TypeGetClassNamesProps = TypeGeneralClassNames

type TypeGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TypeGetClassNamesProps): TypeGetClassNamesOutput =>
  classNames
    .filter(className => className)
    .reduce((acc, cur) => ({ ...acc, [cur]: true }), {})

export default getClassNames
