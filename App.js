import React from 'react';
import {View, StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import MainScreen from './src/components/MainScreen';
import Timer from './src/components/Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <SafeAreaInsetsContext.Consumer>
          {insets => {
            return (
              <View>
                <Timer />
                <MainScreen />
              </View>
            );
          }}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
