import {
  TypeGeneralFallback,
  TypePageProgramPaths,
  TypePageProgramPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import { apolloClient } from '@/lib/index'
import { routesFront, routesBack, fallback } from '@/config/index'

const getStaticPathsPageProgram = async (): Promise<{
  paths: TypePageProgramPaths
  fallback: TypeGeneralFallback
}> => {
  const res = await apolloClient.query<TypePageProgramPathsQuery>({
    query: gql`
      query GetStaticPathsPageProgram($type: String!) {
        programs: products(where: { category: { type: $type } }) {
          slug
        }
      }
    `,
    variables: {
      type: 'mini'
    }
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.programs?.map(program => ({
          params: { program: program?.slug || 'program' }
        }))
      )
    ) || [{ params: { program: 'program' } }],
    fallback
  }
}

export default getStaticPathsPageProgram
