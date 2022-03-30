import stls from '@/styles/components/sections/general/SectionGeneralStudyFormats.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import selectors from '@/config/selectors'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle, GeneralUIForm } from '@/components/general'

type TypeSectionGeneralStudyFormatsProps = TypeGeneralClassNames

const SectionGeneralStudyFormats = ({
  classNames
}: TypeSectionGeneralStudyFormatsProps) => {
  // TODO: add decorations from figma
  const formats = [
    {
      title: 'online mba',
      content: [
        'Программа проходит в онлайн-формате. Разработана специально для предпринимателей и руководителей, которые ценят свое время и хотят пройти обучение без отрыва от работы',
        'Во время обучения Вы будете получать обратную связь от экспертов по решению кейсов, проектным работам и домашним заданиям. Сможете в любое время задать вопрос и получить полезные советы и рекомендации'
      ]
    },
    {
      title: 'blended mba',
      content: [
        'Смешанная программа MBA с очными сессиями. Разработана для предпринимателей и руководителей, которые готовы выделять время на посещение наших кампусов в Москве',
        'Во время обучения Вы сможете как в онлайн формате, так и очно получать обратную связь от экспертов и коллег по решению кейсов, проектным работам и домашним заданиям'
      ]
    }
  ]

  return (
    <Section
      classNames={[cn(stls.container, classNames)]}
      id={selectors.studyFormats}>
      <Wrapper>
        <GeneralSectionTitle titleClassNames={[stls.title]}>
          форматы обучения
        </GeneralSectionTitle>
        <ul className={stls.formats}>
          {formats.map((format, idx) => (
            <li
              key={`SectionGeneralStudyFormats__${format.title}-${idx}`}
              className={stls.format}>
              <div className={cn(stls.formatBody, stls[`formatBody-${idx}`])}>
                <h3 className={stls.formatTitle}>{format.title}</h3>
                <div className={stls.formatContent}>
                  {format.content.map((item, idx) => (
                    <p
                      key={`SectionGeneralStudyFormats__${item}-${idx}`}
                      className={stls.formatP}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <GeneralUIForm
          classNames={[stls.form]}
          title='Оставьте заявку на&nbsp;консультацию c&nbsp;менеджером приемной комиссии'
          explanation='Оставьте заявку и получите консультацию по&nbsp;любому вопросу, узнайте точную стоимость программ, возможные варианты скидок и&nbsp;требования к поступлению'
        />
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralStudyFormats
