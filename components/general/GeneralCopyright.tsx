import stls from '@/styles/components/general/GeneralCopyright.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { companyName } from '@/config/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralCopyrightProps = TypeGeneralClassNames

const GeneralCopyright = ({ classNames }: TypeGeneralCopyrightProps) => {
  return (
    <p
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      &copy; {companyName}, {new Date().getFullYear()}
    </p>
  )
}

export default GeneralCopyright
