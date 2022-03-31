import stls from '@/styles/components/layout/Header.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { phoneNumber } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextMenuContext } from '@/context/index'
import { HeaderMenuDesktop, HeaderMenuMobile } from '@/components/header'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralLogo } from '@/components/general'
import { IconGeneralHamburger } from '@/components/icons'
import { ImgGeneralGMDELogo, ImgGeneralRABOLogo } from '@/components/images'

type TypeHeaderProps = TypeGeneralClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const { setMemuIsOpen } = useContext(ContextMenuContext)
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
        <a
          href='#!'
          className={stls.btnHamburger}
          onClick={() => setMemuIsOpen({ payload: true })}>
          <IconGeneralHamburger />
        </a>
      </Wrapper>
      <HeaderMenuDesktop />
      <HeaderMenuMobile />
    </header>
  )
}

export default Header
