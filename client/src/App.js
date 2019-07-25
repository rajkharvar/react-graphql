import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <div id='book-list'>
          <BookList />
        </div>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
