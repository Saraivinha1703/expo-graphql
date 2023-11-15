import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://192.168.96.99:4000',
  cache: new InMemoryCache(),
});
