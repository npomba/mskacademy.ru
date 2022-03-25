import stls from '@/styles/components/general/GeneralCopyright.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { companyName } from '@/config/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralCopyrightProps = TypeGeneralClassNames

const GeneralCopyright = ({ classNames }: TypeGeneralCopyrightProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <p className={stls.text}>
        &copy; {companyName}, {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default GeneralCopyright
