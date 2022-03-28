import {
  TypeGeneralChildren,
  TypeContextProgram,
  TypeLibProgram
} from '@/types/index'
import { SET_PROGRAM } from '@/context/types'
import { useReducer } from 'react'
import { ContextProgramContext, contextProgramReducer } from '@/context/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeContextProgramStateProps = TypeGeneralChildren

const ContextProgramState = ({ children }: TypeContextProgramStateProps) => {
  const initialState: TypeContextProgram = {
    program: null
  }

  const [state, dispatch] = useReducer(contextProgramReducer, initialState)

  const setProgram = ({ payload }: { payload: TypeLibProgram }) => {
    dispatch({ type: SET_PROGRAM, payload })
  }

  return (
    <ContextProgramContext.Provider
      value={{
        program: state.program,
        setProgram
      }}>
      {children}
    </ContextProgramContext.Provider>
  )
}

export default ContextProgramState
