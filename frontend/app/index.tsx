import { ApolloProvider } from '@apollo/client';
import '../global.css';
import { Theme } from '../Themes';
import { Test } from './Test';
import { client } from '../lib/apollo';

export default function App() {
  return (
    <Theme>
      <ApolloProvider client={client}>
        <Test />
      </ApolloProvider>
    </Theme>
  );
}
