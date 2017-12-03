import React, { Component, Easing } from 'react';
import SplashScreen from './screens/splash.js';
import IntroScreen from './screens/intro.js';
import LoginScreen from './screens/login.js';
import ForgotPasswordScreen from './screens/forgot-password.js';
import RegisterScreen from './screens/register.js';

import { StackNavigator } from 'react-navigation';

const GreenWashApp = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    IntroScreen: { screen: IntroScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen:RegisterScreen },
    ForgotPasswordScreen: { screen:ForgotPasswordScreen }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  });

export default class App extends Component<{}> {
  render() {

    return <GreenWashApp />;
  }
};
