import { TypeContextPrograms, TypeLibPrograms } from '@/types/index'
import { SET_PROGRAMS } from '@/context/types'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type contextProgramsReducerState = TypeContextPrograms

type contextProgramsReducerAction = {
  payload: TypeLibPrograms
  type: typeof SET_PROGRAMS
}

const contextProgramsReducer = (
  state: contextProgramsReducerState,
  action: contextProgramsReducerAction
) => {
  switch (action.type) {
    case SET_PROGRAMS:
      return {
        ...state,
        programs: action.payload
      }
    default:
      return state
  }
}

export default contextProgramsReducer
