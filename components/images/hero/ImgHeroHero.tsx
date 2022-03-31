import stls from '@/styles/components/images/hero/ImgHeroHero.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/hero/ImgHeroHero.png'

type TypeImgHeroHeroProps = TypeGeneralClassNames & TypeGeneralImg

const ImgHeroHero = ({ classNames, width, height }: TypeImgHeroHeroProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Лекция'}
        priority
      />
    </>
  )
}

export default ImgHeroHero
