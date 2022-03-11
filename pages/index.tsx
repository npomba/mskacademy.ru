import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { IconGeneralLogo, IconGeneralLogoRABO } from '@/components/icons'
import { GeneralContactCTA } from '@/components/general'
import { phoneNumber, email } from '@/config/index'
import { ImgGeneralGMDELogo } from '@/components/images'



const Home: NextPage = () => {
  return (
    <>
      <IconGeneralLogo />
      <GeneralContactCTA href={phoneNumber.href} value={phoneNumber.val} lable= {'test phone'} variant={'size-m'}/>
      <GeneralContactCTA href={email.href} value={email.val} lable= {'test email'} variant={'size-xl'}/>
      <IconGeneralLogoRABO/>
      <ImgGeneralGMDELogo/>
    </>
  )
}

export default Home
