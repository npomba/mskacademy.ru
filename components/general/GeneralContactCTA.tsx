import stls from '@/styles/components/general/GeneralContactCTA.module.sass'
import { TypeGeneralClassNames, TypeGeneralEmailLink, TypeGeneralEmailValue, TypeGeneralPhoneLink, TypeGeneralPhoneValue } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'


type TypeGeneralContactCTAProps = TypeGeneralClassNames & {
    href: TypeGeneralPhoneLink | TypeGeneralEmailLink
    value: TypeGeneralPhoneValue | TypeGeneralEmailValue
    lable?: string 
    variant: 'size-m' | 'size-xl' 
}

const GeneralContactCTA = ({ classNames, href, value, lable, variant }: TypeGeneralContactCTAProps) => {

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            <a className={cn(stls.link, {
                [stls.sizeM]: variant === 'size-m', 
                [stls.sizeXL]: variant === 'size-xl'
                })} 
                href={href}
                >{value}</a>
            {
                lable && <p className={stls.lable}>{lable}</p> 
            }
        </div>
      )
}

export default GeneralContactCTA