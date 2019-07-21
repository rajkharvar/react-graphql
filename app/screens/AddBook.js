import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class AddBook extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AddBook</Text>
            </View>
        );
    }
}
export default AddBook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});