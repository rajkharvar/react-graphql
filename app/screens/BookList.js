import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  static navigationOptions = {
    title: 'All Books'
  };

  generateBooks = () => {
    let books = this.props.data.books;
    if (books) {
      return books.map(book => (
        <View
          key={book.id}
          style={{
            paddingLeft: 18,
            borderBottomColor: '#E10098',
            borderBottomWidth: 1
          }}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('BookDetails', {
                bookId: book.id,
                name: book.name
              })
            }
          >
            <Text style={styles.bookTitle}>{book.name}</Text>
            <Text style={styles.bookAuthor}>~ {book.author.name}</Text>
          </TouchableOpacity>
        </View>
      ));
    } else {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size='large' color='#E10098' />
          <Text style={styles.text}>Please Wait...</Text>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>{this.generateBooks()}</View>
        </ScrollView>
      </View>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#E10098'
  },
  bookTitle: {
    color: '#E10098',
    fontSize: 24,
    marginVertical: 12
  },
  bookAuthor: {
    fontSize: 18,
    color: '#E10098',
    marginBottom: 12
  }
});
