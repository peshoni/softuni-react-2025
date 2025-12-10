import * as Apollo from '@apollo/client';

const client = new Apollo.ApolloClient({
  link: new Apollo.HttpLink({
    uri: "http://127.0.0.1:8080/v1/graphql"
  }),
  cache: new Apollo.InMemoryCache(),
  defaultOptions: {
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all', 
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
      pollInterval: 60000
    }
  }
});

export default client;
