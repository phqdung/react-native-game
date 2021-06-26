import React from 'react';
import {ImageBackground, Text, StyleSheet, Button} from 'react-native';
import {ROUTE} from '../navigations';
import {convertTimeStamp, getHeight, normalize} from '../utils/common';
import images from '../utils/images';

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.timestamp = this.props.route.params?.timestamp;
  }

  playAgain() {
    this.props.navigation.navigate(ROUTE.home);
  }

  render() {
    const {minute, second, milisecond} = convertTimeStamp(this.timestamp);

    return (
      <ImageBackground style={styles.container} source={images.background}>
        <Text style={styles.title}>WIN GAME</Text>
        <Text style={styles.score}>
          Your time: {minute}m {second}s {milisecond}ms
        </Text>
        <Button title="Play Again" onPress={this.playAgain.bind(this)} />
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
    fontSize: normalize(32),
    fontWeight: 'bold',
    color: '#ff3355',
    marginBottom: getHeight(15),
  },
  score: {
    fontWeight: 'bold',
    marginBottom: getHeight(60),
  },
});
