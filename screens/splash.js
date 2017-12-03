import React, {Component} from 'react';
import {Image, ImageBackground, Button} from 'react-native';
import Screen from '../components/screen.js';

export default class SplashScreen extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    function goToIntro(){
      navigate('IntroScreen');
    };

    setTimeout(() => {goToIntro()}, 1000);

    return (
        <Screen navigation={this.props.navigation}>        
            <ImageBackground 
                    source={require('../images/splash-screen-background.png')}
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      width: undefined,
                      height: undefined,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
  
                <Image 
                    source={require('../images/splash-screen-logo.png')}
                    style={{
                      width: 197,
                      height: 300
                    }}>
              </Image>

            </ImageBackground>
        </Screen>
    );
  }
}