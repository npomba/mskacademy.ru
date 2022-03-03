import stls from '@/styles/components/layout/Header.module.sass'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { getClassNames } from '@/helpers/index'
import { TypeClassNames } from '@/types/index'


type TypeHeaderProps = TypeClassNames

const Header = ({ classNames = [] }: TypeHeaderProps) => {
  const router = useRouter()
  

  return (
    <header className={cn(stls.container, getClassNames({ classNames }))}>
        header
    </header>
  )
}

export default Header