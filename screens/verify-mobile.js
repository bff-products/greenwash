import React, {Component} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import Screen from '../components/screen.js';
import Button from '../components/button.js';
import LinkButton from '../components/link-button.js';
import TextField from '../components/text-field.js';

export default class ForgotPasswordScreen extends Component<{}> {
  
  render() {

    const { navigate } = this.props.navigation;
    function onSubmitPress(){
        navigate("HomeScreen");
    }

    function onChangeNumberPress(){
        Alert.alert("onChangeNumberPress");
    }

    function onResendCodePress(){
        Alert.alert("onResendCodePress");
    }

    return (
        <Screen navigation={this.props.navigation}
            showHeader={true}
            headerLabel="Verify Mobile"
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
                        source={require('../images/sms.png')} 
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
                    >We are unable to auto -verify your mobile number. please enter the code texted to +1 91234 5679</Text>
                </View>
                <View style={{
                        padding: 15,
                        flexDirection: 'row'
                    }}>
                    <TextField 
                        title="ENTER CODE"
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
                                title="SUBMIT" 
                                fontColor="#ffffff"
                                borderColor="#363f45"
                                backgroundColor="#363f45"
                                onPress={onSubmitPress}></Button>
                </View>
                <View style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        alignSelf: 'stretch',
                        padding: 10}}>
                        <LinkButton 
                            title="CHANGE NUMBER" 
                            onPress={onChangeNumberPress}
                            fontColor="#9a9fa2"/>
                        <LinkButton 
                            title="RESEND CODE" 
                            onPress={onResendCodePress}
                            fontColor="#9a9fa2"/>
                </View>
            </View>
        </Screen>
    );
  }
}