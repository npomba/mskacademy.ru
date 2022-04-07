import stls from '@/styles/components/sections/general/SectionGeneralHero.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { selectors, defaultProgramTitle } from '@/config/index'
import { dataGeneralTestimonials } from '@/data/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper, Section } from '@/components/layout'
import { GeneralHeroDecorations } from '@/components/general'
import { FormLead } from '@/components/forms'
import { ImgGeneralCircleDecoration, ImgHeroHero } from '@/components/images'

type TypeSectionGeneralHeroProps = TypeGeneralClassNames

const SectionGeneralHero = ({ classNames }: TypeSectionGeneralHeroProps) => {
  const { program } = useContext(ContextProgramContext)

  const title = program?.title || defaultProgramTitle
  return (
    <Section classNames={[cn(stls.container, classNames)]} id={selectors.home}>
      <ImgHeroHero classNames={[stls.img]} />
      <Wrapper>
        <div className={stls.abovetitle}>КУРС MBA</div>
        <h1
          className={cn(stls.title, {
            [stls.defaultProgramTitle]: title === defaultProgramTitle
          })}>
          {title}
        </h1>
        <p className={stls.subtitle}>
          Оставьте заявку и&nbsp;получите консультацию, а&nbsp;также узнайте
          о&nbsp;требованиях к&nbsp;поступлению и&nbsp;возможных скидках
        </p>
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
