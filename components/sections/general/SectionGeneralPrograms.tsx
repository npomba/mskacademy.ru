import stls from '@/styles/components/sections/general/SectionGeneralPrograms.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import { useContext, useState } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { ContextProgramsContext } from '@/context/index'
import { Wrapper, Section } from '@/components/layout'
import { GeneralSectionTitle, GeneralUIForm } from '@/components/general'
import { LIProgram } from '@/components/lis'
import { BtnAlpha } from '@/components/btns'
import { IconGeneralRefresh, IconPointerTop } from '@/components/icons'

type TypeSectionGeneralProgramsProps = TypeGeneralClassNames

const SectionGeneralPrograms = ({
  classNames
}: TypeSectionGeneralProgramsProps) => {
  const { programs } = useContext(ContextProgramsContext)

  const isShownCountDefault = 5
  const isShownCountIncrement = 10
  const [isShownCount, setIsShownCount] = useState(isShownCountDefault)

  return (
    <Section
      classNames={[cn(stls.container, classNames)]}
      id={selectors.programs}>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <GeneralSectionTitle titleClassNames={[stls.title]}>
              Направления обучения
            </GeneralSectionTitle>
            <p className={stls.subtitle}>
              {Math.ceil((programs?.length || 50) / 10) * 10}+ направлений
            </p>
          </div>
          <div className={stls.content}>
            <ul className={stls.programs}>
              {programs
                ?.filter((_, idx) => idx < isShownCount)
                .map((program, idx) => (
                  <LIProgram
                    classNames={[stls.program]}
                    key={
                      program?.id || `SectionGeneralPrograms__programs-${idx}`
                    }
                    program={program}
                    idx={idx}
                  />
                ))}
            </ul>
            <div className={stls.controlGroup}>
              {isShownCount < (programs?.length || 0) && (
                <BtnAlpha
                  variant='alpha-reverse'
                  classNames={[stls.btnShowMore]}
                  onClick={() =>
                    setIsShownCount(isShownCount + isShownCountIncrement)
                  }>
                  <IconGeneralRefresh classNames={[stls.IconGeneralRefresh]} />
                  еще{' '}
                  {(programs?.length || 50) - isShownCount <
                  isShownCountIncrement
                    ? (programs?.length || 50) - isShownCount
                    : isShownCountIncrement}{' '}
                  курсов из {(programs?.length || 50) - isShownCount}
                </BtnAlpha>
              )}
              {isShownCount !== isShownCountDefault && (
                <a
                  href={`#${selectors.programs}`}
                  className={stls.btnShowLess}
                  onClick={() => setIsShownCount(isShownCountDefault)}>
                  Скрыть все{' '}
                  <IconPointerTop classNames={[stls.IconPointerTop]} />
                </a>
              )}
            </div>
          </div>
        </div>
        <GeneralUIForm
          classNames={[stls.form]}
          title='Не нашли нужную программу?'
          subtitle='Наши специалисты помогут!'
          explanation='Оставьте заявку и наши специалисты Вам помогут подобрать нужную программу, а также ответят на&nbsp;вопросы, расскажут о возможных вариантах скидок и требованиях к поступлению'
        />
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralPrograms
