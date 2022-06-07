import stls from '@/styles/components/layout/Header.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext } from 'react'
import { Router, useRouter } from 'next/router'
import cn from 'classnames'
import { phoneNumber, phoneNumberKK } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useSSLocale } from '@/hooks/index'
import { ContextMenuContext } from '@/context/index'
import { HeaderMenuDesktop, HeaderMenuMobile } from '@/components/header'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralLogo } from '@/components/general'
import { IconGeneralHamburger } from '@/components/icons'
import { ImgGeneralGMDELogo, ImgGeneralRABOLogo } from '@/components/images'

type TypeHeaderProps = TypeGeneralClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const { setMemuIsOpen } = useContext(ContextMenuContext)

  const { locale, query } = useRouter()

  const SSLocale = useSSLocale()

  const atKz =
    locale === 'kz' ||
    locale === 'kk' ||
    locale === 'kk_KZ' ||
    SSLocale === 'kz' ||
    SSLocale === 'kk' ||
    SSLocale === 'kk_KZ' ||
    query.locale === 'kz' ||
    query.locale === 'kk' ||
    query.locale === 'kk_KZ'

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
          href={atKz ? phoneNumberKK.href : phoneNumber.href}
          value={atKz ? phoneNumberKK.val : phoneNumber.val}
          lable={atKz ? 'Бесплатно по Казахстану' : 'Бесплатно по России'}
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
