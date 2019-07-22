import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import {
  getAuthorQuery,
  addBookMutation,
  getBooksQuery
} from '../queries/queries';
import { graphql, compose } from 'react-apollo';

class AddBook extends Component {
  static navigationOptions = {
    title: 'Add Book'
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedAuthor: '',
      name: '',
      edition: '',
      price: 0
    };
  }

  generatePickerItem = () => {
    let { authors } = this.props.getAuthorQuery;
    if (authors) {
      return (
        <Picker
          itemStyle={{ color: '#E10098', marginTop: -20 }}
          selectedValue={this.state.selectedAuthor}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedAuthor: itemValue })
          }
        >
          <Picker.Item label='none' value={null} />
          {authors.map(author => (
            <Picker.Item
              label={author.name}
              value={author.id}
              key={author.id}
            />
          ))}
        </Picker>
      );
    } else {
      return (
        <Picker>
          <Picker.Item label='Please Wait' />
        </Picker>
      );
    }
  };

  handleSubmit = () => {
    if (
      this.state.name === '' ||
      this.state.edition === '' ||
      this.state.price === 0 ||
      this.state.selectedAuthor === ''
    ) {
      alert('All fields are mandatory');
    } else {
      this.props.addBookMutation({
        variables: {
          name: this.state.name,
          edition: this.state.edition,
          price: parseFloat(this.state.price),
          authorId: this.state.selectedAuthor
        },
        refetchQueries: [{ query: getBooksQuery }]
      });
    }
  };
  render() {
    console.log(this.state.selectedAuthor);
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 18
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: '#E10098'
              }}
            >
              AddBook
            </Text>
          </View>
          <View style={{ padding: 12 }}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter book name'
              placeholderTextColor='#F37AB7'
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Enter book edition'
              placeholderTextColor='#F37AB7'
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={edition => this.setState({ edition })}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Enter price'
              placeholderTextColor='#F37AB7'
              keyboardType='number-pad'
              onChangeText={price => this.setState({ price })}
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#E10098', fontSize: 18 }}>
              Select Author
            </Text>
          </View>
          {this.generatePickerItem()}
          <TouchableOpacity
            onPress={() => this.handleSubmit()}
            style={{
              borderColor: '#E10098',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              margin: 8
            }}
          >
            <Text
              style={{ color: '#E10098', fontSize: 18, paddingVertical: 8 }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default compose(
  graphql(getAuthorQuery, { name: 'getAuthorQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E10098',
    color: '#E10098',
    marginVertical: 12,
    paddingVertical: 8
  }
});
