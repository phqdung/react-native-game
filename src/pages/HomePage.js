import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../navigations';
import {getHeight, normalize} from '../utils/common';
import images from '../utils/images';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  goToGame() {
    this.props.navigation.navigate(ROUTE.game);
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={images.background}>
        <Text style={styles.title}>Welcome to Game</Text>
        <Button title="Play" onPress={this.goToGame.bind(this)} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(16),
    marginBottom: getHeight(30),
  },
});
