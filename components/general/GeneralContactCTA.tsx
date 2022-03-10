import stls from '@/styles/components/general/GeneralContactCTA.module.sass'
import { TypeGeneralClassNames, TypeGeneralEmailLink, TypeGeneralEmailValue, TypeGeneralPhoneLink, TypeGeneralPhoneValue } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'


type TypeGeneralContactCTAProps = TypeGeneralClassNames & {
    href: TypeGeneralPhoneLink | TypeGeneralEmailLink
    value: TypeGeneralPhoneValue | TypeGeneralEmailValue
    lable: string
}

const GeneralContactCTA = ({ classNames, href, value, lable }: TypeGeneralContactCTAProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            
        </div>
      )
}

export default GeneralContactCTA