import stls from '@/styles/components/sections/general/SectionGeneralWeAre.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { dataGeneralWeAre } from '@/data/index'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import {
  ImgWeAreDecoration1,
  ImgWeAreDecoration2,
  ImgGeneralECTSLogo,
  ImgWeAreStudents,
  ImgWeAreConference,
  ImgWeAreRoom
} from '@/components/images'

// TODO: create popups for images & make ECTS interactive & make imgs look good and more responsive (especially on mobile devices)

type TypeSectionGeneralWeAreProps = TypeGeneralClassNames

const SectionGeneralWeAre = ({ classNames }: TypeSectionGeneralWeAreProps) => {
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper classNames={[stls.wrapper]}>
        <ImgWeAreDecoration1 classNames={[stls.ImgWeAreDecoration1]} />
        <ImgWeAreDecoration2 classNames={[stls.ImgWeAreDecoration2]} />
        <GeneralSectionTitle classNames={[stls.title]}>
          Столичная Бизнес<span className={stls.phoneTablet}>-</span>
          <span className={stls.laptopDesktop}> </span>Академия — это
        </GeneralSectionTitle>

        <div className={stls.content}>
          <ul className={stls.testimonials}>
            {dataGeneralWeAre.map((item, idx, arr) => (
              <li key={`${item.title}-${idx}`} className={stls.testimonial}>
                {!arr[idx + 1] && (
                  <ImgGeneralECTSLogo classNames={[stls.ImgGeneralECTSLogo]} />
                )}
                <h3 className={stls.testimonialTitle}>{item.title}</h3>
                <p className={stls.testimonialContent}>{item.content}</p>
              </li>
            ))}
          </ul>
          <div className={stls.imgs}>
            <ImgWeAreStudents classNames={[stls.img, stls.ImgWeAreStudents]} />
            <div className={stls.smallerImgs}>
              <ImgWeAreConference
                classNames={[stls.img, stls.ImgWeAreConference]}
              />
              <ImgWeAreRoom classNames={[stls.img, stls.ImgWeAreRoom]} />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralWeAre
