import React from 'react';
import './App.css';
import ExchangeRates from './components/useHello'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <ExchangeRates/>
      </div>
    </ApolloProvider>
  )
}

export default App;
