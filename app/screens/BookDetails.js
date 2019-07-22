import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getBookQuery } from '../queries/queries';
import { graphql } from 'react-apollo';

class BookDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Book Details')
    };
  };

  generateBookDetails = () => {
    let { book } = this.props.data;
    if (book) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#E10098', fontSize: 60 }}>{book.name}</Text>
          </View>
          <View style={styles.textCard}>
            <Text style={styles.text}>Edition</Text>
            <Text style={styles.text}>{book.edition}</Text>
          </View>
          <View style={styles.textCard}>
            <Text style={styles.text}>Price</Text>
            <Text style={styles.text}>{book.price} &#8377;</Text>
          </View>
          <View style={styles.textCard}>
            <Text style={styles.text}>Author</Text>
            <Text style={styles.text}>{book.author.name}</Text>
          </View>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ color: '#E10098', fontSize: 18 }}>
              All Books by {book.author.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {book.author.books.map(book => (
              <Text
                key={book.id}
                style={{
                  color: '#fff',
                  backgroundColor: '#E10098',
                  fontSize: 18,
                  fontWeight: '700',
                  padding: 10,
                  margin: 10
                }}
              >
                {book.name}
              </Text>
            ))}
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' color='#E10098' />
          <Text style={{ fontSize: 18, color: '#E10098' }}>Please Wait...</Text>
        </View>
      );
    }
  };

  render() {
    return <View style={styles.container}>{this.generateBookDetails()}</View>;
  }
}
export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.navigation.getParam('bookId', '')
      }
    };
  }
})(BookDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textCard: {
    flexDirection: 'row',
    borderBottomColor: '#E10098',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text: {
    color: '#E10098',
    fontSize: 18,
    marginVertical: 8
  }
});
