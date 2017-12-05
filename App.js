import React, { Component, Easing } from 'react';
import SplashScreen from './screens/splash.js';
import IntroScreen from './screens/intro.js';
import LoginScreen from './screens/login.js';
import ForgotPasswordScreen from './screens/forgot-password.js';
import VerifyMobileScreen from './screens/verify-mobile.js';
import RegisterScreen from './screens/register.js';
import HomeScreen from './screens/home.js';

import { StackNavigator } from 'react-navigation';

const GreenWashApp = StackNavigator(
  {
    /*
    SplashScreen: { screen: SplashScreen },
    IntroScreen: { screen: IntroScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen:RegisterScreen },
    ForgotPasswordScreen: { screen:ForgotPasswordScreen },
    VerifyMobileScreen: { screen:VerifyMobileScreen },
    */
    HomeScreen: { screen:HomeScreen }
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
