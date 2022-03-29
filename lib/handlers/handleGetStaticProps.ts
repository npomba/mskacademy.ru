import {
  TypeGeneralRoutesFront,
  TypePageHomeProps,
  TypeGeneralGetStaticPropsContext,
  TypeGeneralRevalidate
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import { getStaticPropsPageHome } from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
} & TypeGeneralGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props: TypePageHomeProps | {}
  revalidate: TypeGeneralRevalidate
}> => {
  try {
    switch (page) {
      case routesFront.home:
        return await getStaticPropsPageHome({ context })

      default:
        return {
          props: {},
          revalidate
        }
    }
  } catch (err) {
    console.log(err)
    throw new Error(`Error at handleGetStaticProps: ${err}`)
  }
}

export default handleGetStaticProps
