import stls from '@/styles/components/lis/LIProgram.module.sass'
import { TypeGeneralClassNames, TypeLibProgram } from '@/types/index'
import { useState } from 'react'
import cn from 'classnames'
import { defaultProgramTitle } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ProgramAdmission } from '@/components/program'
import { IconGeneralPlus, IconGeneralMinus } from '@/components/icons'

type TypeLIProgramProps = TypeGeneralClassNames & {
  program: TypeLibProgram
  idx: number
}

const LIProgram = ({ classNames, program, idx }: TypeLIProgramProps) => {
  const [programIsOpen, setProgramIsOpen] = useState(idx === 0)

  const programInfos = [
    {
      item: `от ${program?.duration?.minStudyMonths || 4} месяцев`
    },
    {
      item: 'очно/дистанционно'
    },
    {
      item: (
        <>
          старт <ProgramAdmission />
        </>
      )
    }
  ]

  const Icon = ({ desktop }: { desktop?: boolean }) =>
    programIsOpen ? (
      <IconGeneralMinus
        classNames={[
          cn(stls.icon, {
            [stls.iconDesktop]: desktop,
            [stls.iconPhoneTabletLaptop]: !desktop
          })
        ]}
      />
    ) : (
      <IconGeneralPlus
        classNames={[
          cn(stls.icon, {
            [stls.iconDesktop]: desktop,
            [stls.iconPhoneTabletLaptop]: !desktop
          })
        ]}
      />
    )

  return (
    <li
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <a
        href='#!'
        className={stls.link}
        onClick={() => setProgramIsOpen(!programIsOpen)}>
        <Icon desktop />
        <div className={stls.top}>
          <p className={stls.label}>Курс MBA</p>
          <Icon />
        </div>
        <ul className={stls.programInfos}>
          {programInfos.map(info => (
            <li key={info.item.toString()} className={stls.programInfo}>
              {info.item}
            </li>
          ))}
        </ul>
        <h3 className={stls.title}>{program?.title || defaultProgramTitle}</h3>
      </a>
      {programIsOpen && (
        <div className={stls.content}>
          <p className={stls.subtitle}>Чему научитесь:</p>
          <ul className={stls.whatWillYouLearn}>
            {program?.whatWillYouLearn?.map((item, idx) => (
              <li
                key={item.string || `LIProgram__whatWillYouLearn__item-${idx}`}
                className={stls.item}>
                <p className={stls.p}>{item.string}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default LIProgram
