import stls from '@/styles/components/general/GeniralContactCTA.module.sass'
import { TypeGeneralClassNames, TypeGeneralEmailLink, TypeGeneralEmailValue, TypeGeneralPhoneLink, TypeGeneralPhoneValue } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'


type TypeGeniralContactCTAProps = TypeGeneralClassNames & {
    href: TypeGeneralPhoneLink | TypeGeneralEmailLink
    value: TypeGeneralPhoneValue | TypeGeneralEmailValue
    lable: string
}

const GeniralContactCTA = ({ classNames, href, value, lable }: TypeGeniralContactCTAProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            
        </div>
      )
}

export default GeniralContactCTA