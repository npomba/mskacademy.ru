import { ApolloClient, InMemoryCache } from '@apollo/client'
import { routesBack } from '@/config/index'

const apolloClient = new ApolloClient({
  uri: `${routesBack.root}${routesBack.graphql}`,
  cache: new InMemoryCache()
})

export default apolloClient
