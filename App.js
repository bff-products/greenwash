import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>GREEN WASH</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007C3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
