import stls from '@/styles/components/general/GeneralLogo.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { companyName } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconGeneralLogo } from '@/components/icons'

type TypeGeneralLogoProps = TypeGeneralClassNames

const GeneralLogo = ({ classNames }: TypeGeneralLogoProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <IconGeneralLogo classNames={[stls.icon]} />
      <p className={stls.text}>{companyName}</p>
    </div>
  )
}

export default GeneralLogo
