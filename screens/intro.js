import React, {Component} from 'react';
import {View, ImageBackground, Text, Button} from 'react-native';
import Screen from '../components/screen.js';

export default class IntroScreen extends Component<{}> {
  render() {
    function onLoginPress(){
        
    }

    function onRegisterPress(){

    }

    return (
        <Screen>        
            <ImageBackground 
                source={require('../images/intro.jpg')}
                style={{
                    flex: 0.61,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined
                }}/>
            <View style={{
                flex: 0.39,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                alignSelf: 'stretch'}}>

                <View style={{marginTop: 30}}>
                    <Text
                        style={{
                            fontFamily: 'Roboto-Light',
                            fontSize: 25,
                            color: '#fd9f00'}}>
                        Welcome come to Dubai</Text>
                </View>
                <View style={{marginTop: 10, paddingLeft: 15, paddingRight: 15}}>
                    <Text style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet,  ipsum dolor sit amet consectetur adipisicing elit, sed dorem ipsum dolor sit amet, consectetur adipisicing elit, sed d</Text>
                </View>
                <View style={{
                    marginTop: 15, 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    padding: 15,
                    alignSelf: 'stretch'}}>
                    <Button title="LOGIN" onPress={onLoginPress}></Button>
                    <Button title="REGISTER" onPress={onRegisterPress}></Button>
                </View>
            </View>
        </Screen>
    );
  }
}