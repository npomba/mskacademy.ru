import {
  TypeGeneralLeadClientValues,
  TypeGeneralNextApiResLeadData
} from '@/types/index'
import axios, { AxiosResponse } from 'axios'
import { routesFront } from '@/config/index'

type TypeHitLeadRouteProps = {
  lead: TypeGeneralLeadClientValues
}

const hitLeadRoute = async ({
  lead
}: TypeHitLeadRouteProps): Promise<
  AxiosResponse<TypeGeneralNextApiResLeadData>
> =>
  await axios.post<TypeGeneralNextApiResLeadData>(
    `${routesFront.root}${routesFront.apiLead}`,
    lead
  )

export default hitLeadRoute
