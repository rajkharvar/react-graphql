import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookDetails from './screens/BookDetails';
import AddBook from './screens/AddBook';
import BookList from './screens/BookList';
import Welcome from './screens/Welcome';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const stackNavigator = createStackNavigator(
  {
    Welcome,
    AddBook,
    BookList,
    BookDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#E10098' },
      headerTintColor: '#fff'
    }
  }
);

const Container = createAppContainer(stackNavigator);

function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle='light-content' />
      <Container />
    </ApolloProvider>
  );
}

export default App;
