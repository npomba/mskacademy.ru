import stls from '@/styles/components/lis/LIProgram.module.sass'
import { TypeGeneralClassNames, TypeLibProgram } from '@/types/index'
import { MouseEventHandler, useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { defaultProgramTitle } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup, GeneralUIForm } from '@/components/general'
import { ProgramAdmission } from '@/components/program'
import { BtnAlpha } from '@/components/btns'
import {
  IconGeneralPlus,
  IconGeneralMinus,
  IconGeneralArrow
} from '@/components/icons'

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

  const pros = [
    <>
      Международный диплом установленного образца с присвоением степени&nbsp;MBA
    </>,
    <>Последнее обновление программы было в&nbsp;2021&nbsp;г.</>,
    <>Разработана по&nbsp;международным стандартам</>,
    <>Спикеры являются практикикующими специалистами</>
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
        <div className={stls.programIsOpen}>
          <div className={stls.content}>
            <p className={stls.subtitle}>Чему научитесь:</p>
            <ul className={stls.whatWillYouLearn}>
              {program?.whatWillYouLearn?.map((item, idx) => (
                <li
                  key={
                    item.string || `LIProgram__whatWillYouLearn__item-${idx}`
                  }
                  className={stls.item}>
                  <p className={stls.itemP}>{item.string}</p>
                </li>
              ))}
            </ul>
          </div>
          <ul className={stls.pros}>
            {pros.map((pro, idx) => (
              <li key={`${pro}-${idx}`} className={stls.pro}>
                <p className={stls.proP}>{pro}</p>
              </li>
            ))}
          </ul>

          <Popup
            trigger={() => (
              <BtnAlpha variant='beta' classNames={[stls.btn]}>
                <span className={stls.btnContent}>
                  узнать больше о&nbsp;программе{' '}
                </span>
                <IconGeneralArrow classNames={[stls.IconGeneralArrow]} />
              </BtnAlpha>
            )}
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {(close: MouseEventHandler) => (
              <GeneralPopup close={close}>
                <GeneralUIForm isPopup />
              </GeneralPopup>
            )}
          </Popup>
        </div>
      )}
    </li>
  )
}

export default LIProgram
