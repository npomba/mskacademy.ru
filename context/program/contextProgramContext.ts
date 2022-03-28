import { TypeLibProgram } from '@/types/index'
import { createContext } from 'react'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

const contextProgramContext = createContext<{
  program: TypeLibProgram | null
  setProgram: ({ payload }: { payload: TypeLibProgram }) => void
}>({
  program: null,
  setProgram: () => {}
})

export default contextProgramContext
