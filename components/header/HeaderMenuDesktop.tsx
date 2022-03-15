import stls from '@/styles/components/header/HeaderMenuDesktop.module.sass'
import Link from 'next/link'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'
import { getClassNames } from '@/helpers/index'
import { dataGeneralMenuLinks } from '@/data/index'



type TypeHeaderMenuDesktopProps = TypeGeneralClassNames

const HeaderMenuDesktop = ({ classNames }: TypeHeaderMenuDesktopProps) => {

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <Wrapper classNames={[stls.wrapper]}>
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
      </Wrapper>
    </div>
  )
}

export default HeaderMenuDesktop