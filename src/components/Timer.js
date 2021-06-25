import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize, numberPad} from '../utils/common';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 0,
    };

    this.timeSticky = null;

    this.updateTimestamp = this.updateTimestamp.bind(this);
  }

  render() {
    const totalTime = this.state.timestamp / 1000;
    const minute = Math.floor(totalTime / 60);
    const second = Math.floor(totalTime % 60);
    const milisecond = this.state.timestamp % 1000;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{minute < 10 ? `0${minute}` : minute}</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>{second < 10 ? `0${second}` : second}</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>{numberPad(milisecond, 3)}</Text>
      </View>
    );
  }

  updateTimestamp() {
    this.setState({timestamp: this.state.timestamp + 248});
    //console.log(this.state.timestamp);
  }

  componentDidMount() {
    this.timeSticky = setInterval(this.updateTimestamp, 248);
  }

  componentWillUnmount() {
    clearInterval(this.timeSticky);
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
});
