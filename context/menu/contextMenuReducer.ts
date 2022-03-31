import { SET_MENU_IS_OPEN } from '@/context/types'

type contextMenuReducerState = {
  menuIsOpen: boolean
}

type contextMenuReducerAction = {
  payload: boolean
  type: typeof SET_MENU_IS_OPEN
}

const contextMenuReducer = (
  state: contextMenuReducerState,
  action: contextMenuReducerAction
) => {
  switch (action.type) {
    case SET_MENU_IS_OPEN:
      return {
        ...state,
        menuIsOpen: action.payload
      }
    default:
      return state
  }
}

export default contextMenuReducer
