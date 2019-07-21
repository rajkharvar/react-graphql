import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Book App</Text>
          <Text style={styles.title}>Using GraphQL</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddBook')}
          >
            <Text style={styles.buttonText}>Add Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('BookList')}
          >
            <Text style={styles.buttonText}>View All Books</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#E10098'
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: '#E10098',
    fontWeight: '700'
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderColor: '#E10098',
    borderWidth: 2,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    padding: 8,
    color: '#E10098'
  }
});
