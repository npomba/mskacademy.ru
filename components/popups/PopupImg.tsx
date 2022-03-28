import stls from '@/styles/components/popups/PopupImg.module.sass'
import { TypeGeneralClassNames, TypeGeneralChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypePopupImgProps = TypeGeneralClassNames & TypeGeneralChildren

const PopupImg = ({ classNames, children }: TypePopupImgProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default PopupImg
