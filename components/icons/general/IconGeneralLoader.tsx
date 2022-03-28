import stls from '@/styles/components/icons/general/IconGeneralLoader.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeIconGeneralLoaderProps = TypeGeneralClassNames

const IconGeneralLoader = ({ classNames }: TypeIconGeneralLoaderProps) => {
  // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg
        viewBox='0 0 120 30'
        xmlns='http://www.w3.org/2000/svg'
        fill={colors.upsilon}>
        <title>Загрузка...</title>
        <circle cx='15' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
          <animate
            attributeName='r'
            from='9'
            to='9'
            begin='0s'
            dur='0.8s'
            values='9;15;9'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='0.5'
            to='0.5'
            begin='0s'
            dur='0.8s'
            values='.5;1;.5'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='105' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

export default IconGeneralLoader
