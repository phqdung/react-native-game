import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';
import {SafeAreaView} from 'react-native';
//import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ResultPage from '../pages/ResultPage';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export const ROUTE = {
  home: 'Home',
  game: 'Game',
  result: 'Result',
};

export default class StackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {insets => {
            console.log('right', insets);
            return (
              <>
                <StatusBar hidden={true} />
                <Stack.Navigator headerMode="none">
                  <Stack.Screen name={ROUTE.home} component={HomePage} />
                  <Stack.Screen name={ROUTE.game} component={GamePage} />
                  <Stack.Screen name={ROUTE.result} component={ResultPage} />
                </Stack.Navigator>
              </>
            );
          }}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    );
  }
}
