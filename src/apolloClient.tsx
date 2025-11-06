// import { ApolloClient, InMemoryCache, HttpLink ,  } from "@apollo/client";
import * as Apollo from '@apollo/client';

const client = new Apollo.ApolloClient({
  link: new Apollo.HttpLink({
    uri: "http://127.0.0.1:8080/v1/graphql",
    // headers: {
    //   "x-hasura-admin-secret": 'softuniReactAdminSecret', // Use env var in production
    // },
  }),
  cache: new Apollo.InMemoryCache(),
  defaultOptions: {
    mutate: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',

    },
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
      pollInterval: 60000
    }
  }
});

export default client;
