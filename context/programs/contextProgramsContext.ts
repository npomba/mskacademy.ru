import { TypeLibPrograms } from '@/types/index'
import { createContext } from 'react'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

const contextProgramsContext = createContext<{
  programs: TypeLibPrograms | null
  setPrograms: ({ payload }: { payload: TypeLibPrograms | null }) => void
}>({
  programs: null,
  setPrograms: () => {}
})

export default contextProgramsContext
