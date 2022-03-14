import stls from '@/styles/components/sections/general/SectionGeneralWeAre.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { dataGeneralWeAre } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TypeSectionGeneralWeAreProps = TypeGeneralClassNames

const SectionGeneralWeAre = ({ classNames }: TypeSectionGeneralWeAreProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <h2 className={stls.title}>СТОЛИЧНАЯ БИЗНЕС АКАДЕМИЯ — ЭТО</h2>
        <div className={stls.content}>
          <ul className={stls.testimonials}>
            {dataGeneralWeAre.map((item, idx) => (
              <li key={`${item.title}-${idx}`} className={stls.testimonial}>
                <h3 className={stls.testimonialTitle}>{item.title}</h3>
                <p className={stls.testimonialContent}>{item.content}</p>
              </li>
            ))}
          </ul>
          <div className={stls.images}></div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionGeneralWeAre
