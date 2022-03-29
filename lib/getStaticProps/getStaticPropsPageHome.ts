import {
  TypeGeneralGetStaticPropsContext,
  TypeGeneralRevalidate,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import { revalidate } from '@/config/index'
import { apolloClient } from '@/lib/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: TypeGeneralRevalidate
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome($type: String!) {
        programs: products(where: { category: { type: $type } }) {
          id
          title
          slug
          duration {
            minStudyMonths
          }
          whatWillYouLearn {
            string
          }
        }
      }
    `,
    variables: {
      type: 'mini'
    }
  })

  return {
    props: res.data,
    revalidate
  }
}

export default getStaticPropsPagePromo
