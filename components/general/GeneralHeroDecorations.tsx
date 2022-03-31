import stls from '@/styles/components/general/GeneralHeroDecorations.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralHeroDecorationsProps = TypeGeneralClassNames

const GeneralHeroDecorations = ({
  classNames
}: TypeGeneralHeroDecorationsProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <div className={cn(stls.circle, stls['circle-1'])}></div>
      <div className={cn(stls.circle, stls['circle-2'])}></div>
      <div className={cn(stls.circle, stls['circle-3'])}></div>
      <div className={cn(stls.circle, stls['circle-4'])}></div>
      <div className={cn(stls.circle, stls['circle-5'])}></div>
      <div className={cn(stls.circle, stls['circle-6'])}></div>
      <div className={cn(stls.circle, stls['circle-7'])}></div>
      <div className={cn(stls.circle, stls['circle-8'])}></div>
    </div>
  )
}

export default GeneralHeroDecorations
