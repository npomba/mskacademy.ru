import stls from '@/styles/components/popups/PopupLoader.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconGeneralLoader } from '@/components/icons'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypePopupLoaderProps = TypeGeneralClassNames

const PopupLoader = ({ classNames }: TypePopupLoaderProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <IconGeneralLoader classNames={[stls.icon]} />
      <p className={cn(stls.p, stls.pTop)}>Ваша заявка отправляется...</p>
      <p className={cn(stls.p, stls.pBottom)}>Пожалуйста, подождите</p>
    </div>
  )
}

export default PopupLoader
