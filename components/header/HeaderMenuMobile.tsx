import stls from '@/styles/components/header/HeaderMenuMobile.module.sass'
import Link from 'next/link'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { dataGeneralMenuLinks } from '@/data/index'
import { email, phoneNumber } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralContactCTA, GeneralCopyright, GeneralLogo } from '@/components/general'
import { IconGeneralCross } from '@/components/icons'




type TypeHeaderMenuMobileProps = TypeGeneralClassNames

const HeaderMenuMobile = ({ classNames }: TypeHeaderMenuMobileProps) => {

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <Wrapper>
        <div className={stls.top}>
          <GeneralLogo classNames={[stls.iconLogo]} />
          <a className={stls.iconLink} href="#">
            <IconGeneralCross classNames={[stls.iconCross]} />
          </a>
        </div>
        <ul className={stls.list}>
          {
            dataGeneralMenuLinks.map((item, idx) => (
              <li className={stls.item} key={idx}>
                <Link href={item.href}>
                  <a className={stls.link}>{item.title}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={stls.contacts}>
          <GeneralContactCTA
            classNames={[stls.contact]}
            href={email.href}
            value={email.val}
            lable={'По вопросам сотрудничества'}
            variant={'size-m'}
          />
          <GeneralContactCTA
            classNames={[stls.contact]}
            href={phoneNumber.href}
            value={phoneNumber.val}
            lable={'Бесплатно по России'}
            variant={'size-m'}
          />
          <GeneralCopyright classNames={[stls.copyright]} />
        </div>
      </Wrapper>
    </div>
  )
}

export default HeaderMenuMobile