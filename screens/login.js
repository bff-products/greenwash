import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import Screen from '../components/screen.js';
import Button from '../components/button.js';
import ImageButton from '../components/image-button.js';
import LinkButton from '../components/link-button.js';
import TextField from '../components/text-field.js';
import PasswordField from '../components/password-field.js';

export default class LoginScreen extends Component<{}> {
  
  render() {

    const { navigate } = this.props.navigation;
    function onGooglePlusPress(){
        Alert.alert("onGooglePlusPress");
    }

    function onFacebookPress(){
        Alert.alert("onFacebookPress");
    }

    function onLoginPress(){
        navigate("HomeScreen");
    }

    function onForgotPasswordPress(){
        navigate("ForgotPasswordScreen")
    }

    return (
        <Screen navigation={this.props.navigation}
            showHeader={true}
            headerLabel="Login"
            >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch'
                }}
                >        
                <View
                    style={{
                        marginTop: 15, 
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        padding: 15,
                        alignSelf: 'stretch'
                    }}>
                    <ImageButton
                        source={require('../images/google-plus.png')} 
                        onPress={onGooglePlusPress}
                        backgroundColor="#ffffff"
                        borderColor="#df4a32"/>
                    <ImageButton 
                        source={require('../images/facebook.png')} 
                        onPress={onFacebookPress}
                        backgroundColor="#ffffff"
                        borderColor="#3b5999"/>
                </View>
                <View  style={{
                        padding: 15, 
                        alignItems: "center"
                    }}>
                    <Text>OR</Text>
                </View>
                <View style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        flexDirection: 'row',
                        alignSelf: "stretch",
                        justifyContent: "space-around"
                    }}>
                    <TextField 
                        title="PHONE NUMBER OR EMAIL"
                        titleFontColor="#9a9fa2"
                        textFontColor="#000000"
                        />
                </View>
                <View style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        flexDirection: 'row',
                        alignSelf: "stretch",
                        justifyContent: "space-around"
                    }}>
                    <PasswordField 
                        title="PASSWORD"
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
                                title="LOGIN" 
                                fontColor="#ffffff"
                                borderColor="#363f45"
                                backgroundColor="#363f45"
                                onPress={onLoginPress}></Button>
                </View>
                <View style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        alignSelf: 'stretch',
                        padding: 10}}>
                        <LinkButton 
                            title="FORGOT PASSWORD?" 
                            onPress={onForgotPasswordPress}
                            fontColor="#9a9fa2"/>
                </View>

            </View>

        </Screen>
    );
  }
}