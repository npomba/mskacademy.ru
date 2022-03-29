import {
  TypeGeneralFallback,
  TypeGeneralRoutesFront,
  TypePageProgramPaths
} from '@/types/index'
import { routesFront, fallback } from '@/config/index'
import { getStaticPathsPageProgram } from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypeHandleGetStaticPathsProps): Promise<{
  paths: TypePageProgramPaths | []
  fallback: TypeGeneralFallback
}> => {
  switch (page) {
    case routesFront.program:
      return await getStaticPathsPageProgram()

    default:
      return {
        paths: [],
        fallback
      }
  }
}

export default handleGetStaticPaths
