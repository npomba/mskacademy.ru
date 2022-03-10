import stls from '@/styles/components/general/GeniralContactCTA.module.sass'
import { TypeGeneralClassNames, TypeGeneralEmailLink, TypeGeneralEmailValue, TypeGeniralPhoneLink, TypeGeniralPhoneValue } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'


type TypeGeniralContactCTAProps = TypeGeneralClassNames & {
    href: TypeGeniralPhoneLink | TypeGeneralEmailLink
    value: TypeGeniralPhoneValue | TypeGeneralEmailValue
    lable: string
}

const GeniralContactCTA = ({ classNames, href, value, lable }: TypeGeniralContactCTAProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            
        </div>
      )
}

export default GeniralContactCTA