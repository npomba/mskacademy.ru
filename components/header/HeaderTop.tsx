import stls from '@/styles/components/header/HeaderTop.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { phoneNumber } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralLogo } from '@/components/general'
import { IconGeneralLogoRABO } from '@/components/icons'
import { ImgGeneralGMDELogo } from '@/components/images'
import { useState } from 'react'//test


type TypeHeaderTopProps = TypeGeneralClassNames

const HeaderTop = ({ classNames }: TypeHeaderTopProps) => {
    const [open, setOpen] = useState<boolean>(false) //Test

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <Wrapper classNames={[stls.wrapper]}>
                <div className={stls.logos}>
                    <GeneralLogo />
                    <IconGeneralLogoRABO classNames={[stls.iconRABO]} />
                    <ImgGeneralGMDELogo classNames={[stls.iconGMDE]}/>
                </div>
                <GeneralContactCTA classNames={[stls.contacts]} href={phoneNumber.href} value={phoneNumber.val} lable={'Бесплатно по России'} variant={'size-xl'} />
                <div className={cn(stls.burger, {[stls.active]: open})} onClick={() => setOpen(!open)}>
                    <span />
                </div>
            </Wrapper>
        </div>
    )
}

export default HeaderTop