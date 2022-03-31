import { createContext } from 'react'

const contextMenuContext = createContext({
  menuIsOpen: false,
  setMemuIsOpen: ({ payload }: { payload: boolean }) => {}
})

export default contextMenuContext
