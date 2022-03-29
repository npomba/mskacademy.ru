import { dev } from '@/config/index'

// TODO: add types
const routesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  graphql: '/graphql'
}

export default routesBack
