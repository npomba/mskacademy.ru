import stls from '@/styles/components/general/GeneralUIForm.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralGeneralUIFormProps
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { FormLead } from '@/components/forms'

type TypeGeneralUIFormProps = TypeGeneralClassNames &
  TypeGeneralGeneralUIFormProps

const GeneralUIForm = ({
  classNames,
  title,
  subtitle,
  h2,
  desc,
  explanation,
  explanationXl,
  variant,
  isPopup
}: TypeGeneralUIFormProps) => {
  // TODO: add decorations for beta variant
  const Title = h2 ? 'h2' : 'h3'
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames }), {
          [stls.variantBeta]: variant === 'beta'
        }) || undefined
      }>
      <div className={stls.top}>
        <div
          className={cn(stls.heading, {
            [stls.isExplanation]: !!explanation,
            [stls.isExplanationXl]: !!explanationXl
          })}>
          <Title className={stls.title}>
            {title ||
              'Оставьте заявку на консультацию c менеджером приемной комиссии'}
          </Title>
          {subtitle && <p className={stls.subtitle}>{subtitle}</p>}
          {desc && <p className={stls.desc}>{desc}</p>}
        </div>
        {explanation && <p className={stls.explanation}>{explanation}</p>}
        {explanationXl && <p className={stls.explanationXl}>{explanationXl}</p>}
      </div>
      <FormLead classNames={[stls.form]} variant={variant} isPopup={isPopup} />
    </div>
  )
}

export default GeneralUIForm
