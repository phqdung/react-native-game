import React, {createRef} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import MainScreen from '../components/MainScreen';
import Timer from '../components/Timer';
import {ROUTE} from '../navigations';
import images from '../utils/images';

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.timerRef = createRef();
  }

  endGame() {
    this.props.navigation.replace(ROUTE.result, {
      timestamp: this.timerRef.current.state.timestamp,
    });
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={images.background}>
        <Timer ref={this.timerRef} />
        <MainScreen onEndGame={this.endGame.bind(this)} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
