import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  render() {
    console.log(this.props.data.books);
    return (
      <View style={styles.container}>
        <Text>BookList</Text>
      </View>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
