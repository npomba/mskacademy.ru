import { TypeGeneralChildren } from '@/types/index'
import { SET_MENU_IS_OPEN } from '@/context/types'
import { useReducer } from 'react'
import { ContextMenuContext, contextMenuReducer } from '@/context/index'

type TypeContextMenuStateProps = TypeGeneralChildren

const ContextMenuState = ({ children }: TypeContextMenuStateProps) => {
  const initialState: { menuIsOpen: boolean } = {
    menuIsOpen: false
  }

  const [state, dispatch] = useReducer(contextMenuReducer, initialState)

  const setMemuIsOpen = ({ payload }: { payload: boolean }) => {
    dispatch({ type: SET_MENU_IS_OPEN, payload })
  }

  return (
    <ContextMenuContext.Provider
      value={{
        menuIsOpen: state.menuIsOpen,
        setMemuIsOpen
      }}>
      {children}
    </ContextMenuContext.Provider>
  )
}

export default ContextMenuState
