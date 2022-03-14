import stls from '@/styles/components/layout/Header.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { phoneNumber } from '@/config/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { HeaderMenuDesktop, HeaderMenuMobile } from '@/components/header'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralLogo } from '@/components/general'
import { IconGeneralHamburger } from '@/components/icons'
import { ImgGeneralGMDELogo, ImgGeneralRABOLogo } from '@/components/images'

import { useState } from 'react' //test

type TypeHeaderProps = TypeGeneralClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false) //Test

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralLogo classNames={[stls.logo]} />
        <div className={stls.partnersLogos}>
          <ImgGeneralRABOLogo classNames={[stls.logoRABO]} />
          <ImgGeneralGMDELogo classNames={[stls.logoGMDE]} />
        </div>
        <GeneralContactCTA
          classNames={[stls.contact]}
          href={phoneNumber.href}
          value={phoneNumber.val}
          lable={'Бесплатно по России'}
          variant={'size-xl'}
        />
        <a className={stls.btnHamburger} onClick={() => setOpen(!open)}>
          <IconGeneralHamburger />
        </a>
      </Wrapper>

      <HeaderMenuDesktop />
      <HeaderMenuMobile />
    </header>
  )
}

export default Header
