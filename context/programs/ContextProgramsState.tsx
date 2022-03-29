import {
  TypeGeneralChildren,
  TypeContextPrograms,
  TypeLibPrograms
} from '@/types/index'
import { SET_PROGRAMS } from '@/context/types'
import { useReducer } from 'react'
import { ContextProgramsContext, contextProgramsReducer } from '@/context/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeContextProgramsStateProps = TypeGeneralChildren

const ContextProgramsState = ({ children }: TypeContextProgramsStateProps) => {
  const initialState: TypeContextPrograms = {
    programs: null
  }

  const [state, dispatch] = useReducer(contextProgramsReducer, initialState)

  const setPrograms = ({ payload }: { payload: TypeLibPrograms }) => {
    dispatch({ type: SET_PROGRAMS, payload })
  }

  return (
    <ContextProgramsContext.Provider
      value={{
        programs: state.programs,
        setPrograms
      }}>
      {children}
    </ContextProgramsContext.Provider>
  )
}

export default ContextProgramsState
