import { TypeLibProgram } from '@/types/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeLeadProps = {
  id: string
  program: TypeLibProgram
  googleClientId: string | null
}

const lead = ({ id, program, googleClientId }: TypeLeadProps) => {
  // TODO: get rid of line below
  // @ts-expect-error
  window.dataLayer?.push({
    event: 'lead',
    ecommerce: {
      add: {
        actionField: {
          id,
          googleClientId
        },
        products: [
          {
            id: program?.id,
            name: program?.title
          }
        ]
      }
    }
  })
}

export default lead
