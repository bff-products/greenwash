import React, {Component} from 'react';
import {View, ImageBackground, Text, Alert, Dimensions} from 'react-native';
import Screen from '../components/screen.js';
import Button from '../components/button.js';

export default class IntroScreen extends Component<{}> {
    
  render() {
    const { navigate } = this.props.navigation;
    function onLoginPress(){
        navigate('LoginScreen');    
    }

    function onRegisterPress(){
        navigate('RegisterScreen');    
    }

    return (
        
        <Screen>
            <View style={{flex: 1, flexDirection: 'column'}}>        
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
                    alignSelf: 'stretch',
                    justifyContent: 'center'}}>

                    <View>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Light',
                                fontSize: 25,
                                color: '#fd9f00'}}>
                            Welcome to Dubai</Text>
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
                        <Button 
                            title="LOGIN" 
                            fontColor="#353f45"
                            borderColor="#353f45"
                            backgroundColor="#ffffff"
                            onPress={onLoginPress}></Button>
                        <Button 
                            title="REGISTER" 
                            fontColor="#ffffff"
                            borderColor="#353f45"
                            backgroundColor="#353f45"
                            onPress={onRegisterPress}></Button>
                    </View>
                </View>
            </View>
        </Screen>
    );
  }
}