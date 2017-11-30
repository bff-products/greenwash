import React, { Component, Easing } from 'react';
import SplashScreen from './screens/splash.js';
import IntroScreen from './screens/intro.js';

import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    IntroScreen: { screen: IntroScreen }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  });

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />;
  }
};
