import stls from '@/styles/components/layout/Footer.module.sass'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { TypeClassNames } from '@/types/index'
import { Wrapper } from '@/components/layout/'


type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {


  
    return (
      <footer className={cn(stls.container, getClassNames({ classNames }))}>
        <Wrapper classNames={[stls.wrapper]}>
            Footer
        </Wrapper>
      </footer>
    )
  }
  
  export default Footer