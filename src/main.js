import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import gql from 'graphql-tag'
import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
app.mount('#app')
