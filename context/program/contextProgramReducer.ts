import { TypeContextProgram, TypeLibProgram } from '@/types/index'
import { SET_PROGRAM } from '@/context/types'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type contextProgramReducerState = TypeContextProgram

type contextProgramReducerAction = {
  payload: TypeLibProgram
  type: typeof SET_PROGRAM
}

const contextProgramReducer = (
  state: contextProgramReducerState,
  action: contextProgramReducerAction
) => {
  switch (action.type) {
    case SET_PROGRAM:
      return {
        ...state,
        program: action.payload
      }
    default:
      return state
  }
}

export default contextProgramReducer
