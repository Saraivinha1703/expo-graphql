import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://YOUR.IP.ADDRESS:4000',
  cache: new InMemoryCache(),
});
