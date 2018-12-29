import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Backpack,
  Browser,
  CreditCard,
  Ghost,
  IceCream,
  Mug,
  Planet,
  SpeechBubble
} from 'react-native-kawaii';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React-native Kawaii !</Text>
        <SpeechBubble mood="ko" />
        <Text style={styles.instructions}>
          Don't forget to install react-native-svg too
        </Text>
        <Text style={styles.instructions}>
          Otherwise the documentation is the same as for react-kawaii
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
