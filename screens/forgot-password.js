import React, {Component} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import Screen from '../components/screen.js';
import Button from '../components/button.js';
import TextField from '../components/text-field.js';

export default class ForgotPasswordScreen extends Component<{}> {
  
  render() {

    function onResetPasswordPress(){
        Alert.alert("onResetPasswordPress");
    }

    return (
        <Screen navigation={this.props.navigation}
            showHeader={true}
            headerLabel="Forgot Password"
            >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch'
                }}
                >        
                <View style={{
                    alignItems: "center",
                    padding: 50,
                    paddingTop: 50
                    }}>
                    <Image 
                        source={require('../images/forgot-password.png')} 
                        resizeMode="center"
                        style={{
                            height: 50
                        }}/>
                    <Text
                        style={{
                            textAlign: "center",
                            marginTop: 20,
                            fontFamily: "Roboto-Regular",
                            fontSize: 15,
                            color: "#363f45"
                        }}
                    >Don’t worry! Just enter your email ID below and we’ll send you the password reset instructions</Text>
                </View>
                <View style={{
                        padding: 15
                    }}>
                    <TextField 
                        title="PHONE NUMBER OR EMAIL"
                        titleFontColor="#9a9fa2"
                        textFontColor="#000000"
                        />                    
                </View>
                <View style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        alignSelf: 'stretch',
                        padding: 10}}>
                    <Button 
                                title="RESET PASSWORD" 
                                fontColor="#ffffff"
                                borderColor="#363f45"
                                backgroundColor="#363f45"
                                onPress={onResetPasswordPress}></Button>
                </View>
            </View>
        </Screen>
    );
  }
}