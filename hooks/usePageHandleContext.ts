import { TypeLibPrograms } from '@/types/index'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ContextProgramsContext, ContextProgramContext } from '@/context/index'

type TypeUsePageHandleContextProps = {
  readonly programs: TypeLibPrograms
}

const usePageHandleContext = ({ programs }: TypeUsePageHandleContextProps) => {
  const router = useRouter()
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setPrograms({ payload: programs || null })
    setProgram({
      payload:
        programs?.filter(
          program => program?.slug === router.query.program
        )?.[0] || null
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programs])
}

export default usePageHandleContext
