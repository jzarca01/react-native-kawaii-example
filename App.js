import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Backpack } from 'react-native-kawaii';

const MOODS = [
  'sad',
  'shocked',
  'happy',
  'blissful',
  'lovestruck',
  'excited',
  'ko'
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    };
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    const currentMood = this.state.mood;
    const otherMoods = MOODS.filter(mood => mood !== currentMood);
    this.setState({
      mood: otherMoods[Math.floor(Math.random() * otherMoods.length)]
    });
  }
  render() {
    const { mood } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React-native Kawaii !</Text>
        <TouchableOpacity onPress={this.changeMood}>
          <Backpack mood={mood} />
        </TouchableOpacity>
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
