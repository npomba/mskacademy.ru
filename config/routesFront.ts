import { dev } from '@/config/index'

// TODO: add types
const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mskacademy.ru',
  apiLead: '/api/lead'
}

export default routesFront
