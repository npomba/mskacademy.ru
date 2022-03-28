import stls from '@/styles/components/images/ImgTemplate.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeImgTemplateProps = TypeGeneralClassNames &
  TypeGeneralImg & {
    readonly src: StaticImageData | string
    readonly alt: string
    readonly title?: string
    readonly priority?: boolean
    readonly placeholder?: 'empty' | 'blur'
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  priority,
  placeholder
}: TypeImgTemplateProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      title={title}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={stls.img}
        placeholder={placeholder || 'blur'}
        blurDataURL={base64pixel}
        priority={priority}
      />
    </div>
  )
}

export default ImgTemplate
