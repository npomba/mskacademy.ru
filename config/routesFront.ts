import { TypeGeneralRoutesFront } from '@/types/index'
import { dev } from '@/config/index'

// TODO: add types
const routesFront: TypeGeneralRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mskacademy.ru',
  home: '/',
  program: '/program',
  apiLead: '/api/lead'
}

export default routesFront
