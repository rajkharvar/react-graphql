import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookDetails extends Component {
  static navigationOptions = {
    header: ({ state }) => {
      return {
        title: state.params.name
      };
    }
  };

  //   for using props in navigationOptions
  componentDidMount() {
    let bookName = this.props.navigation.getParam('name', 'Book Details');
    this.navigation.setParam({ name: bookName });
  }
  render() {
    console.log(this.props.navigation.getParam('bookId', 'noId'));
    return (
      <View style={styles.container}>
        <Text>BookDetails</Text>
      </View>
    );
  }
}
export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
