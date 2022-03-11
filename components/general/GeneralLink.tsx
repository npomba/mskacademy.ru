import stls from '@/styles/components/general/GeneralLink.module.sass'
import Link from 'next/link'
import { TypeGeneralClassNames, TypeGeneralChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'



type TypeGeneralLinkProps = TypeGeneralClassNames & TypeGeneralChildren & {
    href: string,
    clickHandler: () => void
}

const GeneralLink = ({ classNames, children, href, clickHandler }: TypeGeneralLinkProps) => {

    return (
        <Link href={href}>
            <a 
            className={cn(stls.container, getClassNames({ classNames })) || undefined}
            onClick={clickHandler}
            >
                {children}
            </a>
        </Link>
        
    )
}

export default GeneralLink