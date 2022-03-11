import stls from '@/styles/components/layout/Header.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { phoneNumber } from '@/config/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { HeaderMenuDesktop, HeaderModileMenu } from '@/components/header'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralLogo } from '@/components/general'
import { IconGeneralLogoRABO } from '@/components/icons'
import { ImgGeneralGMDELogo } from '@/components/images'
import { useState } from 'react'//test




type TypeHeaderProps = TypeGeneralClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false) //Test


  return (
    <header className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralLogo />
        <div className={stls.logos}>
          <IconGeneralLogoRABO classNames={[stls.iconRABO]} />
          <ImgGeneralGMDELogo classNames={[stls.iconGMDE]} />
        </div>
        <GeneralContactCTA classNames={[stls.contact]} href={phoneNumber.href} value={phoneNumber.val} lable={'Бесплатно по России'} variant={'size-xl'} />
        <a className={cn(stls.icon, { [stls.active]: open })} onClick={() => setOpen(!open)}>
          <span />
        </a>
      </Wrapper>

      <HeaderMenuDesktop />
      <HeaderModileMenu />
    </header>
  )
}

export default Header