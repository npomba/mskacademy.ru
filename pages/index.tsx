import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { IconGeneralLogo } from '@/components/icons'
import { GeniralContactCTA } from '@/components/general'
import { phoneNumber, email } from '@/config/index'


const Home: NextPage = () => {
  return (
    <>
      <IconGeneralLogo />
      <GeniralContactCTA href={phoneNumber.href} value={phoneNumber.val} lable= {'test phone'}/>
      <GeniralContactCTA href={email.href} value={email.val} lable= {'test email'}/>
    </>
  )
}

export default Home
