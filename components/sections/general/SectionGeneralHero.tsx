import stls from '@/styles/components/sections/general/SectionGeneralHero.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { dataGeneralTestimonials } from '@/data/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper, Section } from '@/components/layout'
import { FormLead } from '@/components/forms'
import { ImgGeneralCircleDecoration } from '@/components/images'

type TypeSectionGeneralHeroProps = TypeGeneralClassNames

const SectionGeneralHero = ({ classNames }: TypeSectionGeneralHeroProps) => {
  const { program } = useContext(ContextProgramContext)
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <div className={stls.abovetitle}>КУРС MBA</div>
        <h1 className={stls.title}>
          {program?.title || 'Управление в гостиничном бизнесе'}
        </h1>
        <FormLead classNames={[stls.form]} />
        <ul className={stls.testimonials}>
          {dataGeneralTestimonials.map((testimonial, idx) => (
            <li
              key={`${testimonial.title}-${idx}`}
              className={stls.testimonialItem}>
              <div className={stls.testimonial}>
                <ImgGeneralCircleDecoration classNames={[stls.decoration]} />
                <h2 className={stls.testimonialTitle}>{testimonial.title}</h2>
                <p className={stls.testimonialContent}>{testimonial.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralHero
