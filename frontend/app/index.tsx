import '../global.css';
import { ApolloProvider } from '@apollo/client';
import { Theme } from '../Themes';
import { Test } from './Test';
import { client } from '../lib/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <Test />
      </Theme>
    </ApolloProvider>
  );
}
