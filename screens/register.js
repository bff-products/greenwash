import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import Screen from '../components/screen.js';
import Button from '../components/button.js';
import ImageButton from '../components/image-button.js';
import LinkButton from '../components/link-button.js';
import TextField from '../components/text-field.js';
import PasswordField from '../components/password-field.js';

export default class RegisterScreen extends Component<{}> {
  
  render() 
  {
    const { navigate } = this.props.navigation;
    function onGooglePlusPress(){
      Alert.alert("onGooglePlusPress");
    }

    function onFacebookPress(){
      Alert.alert("onFacebookPress");
    }

    function onNextPress(){
      navigate("VerifyMobileScreen");
    }
    return (
        <Screen navigation={this.props.navigation}
        showHeader={true}
        headerLabel="Register">        
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch'
                }}>
                <View
                    style={{
                        marginTop: 15, 
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        padding: 15,
                        alignSelf: 'stretch'
                    }}>
                    <ImageButton
                        source={require('../images/google-plus-white.png')} 
                        onPress={onGooglePlusPress}
                        backgroundColor="#df4a32"
                        borderColor="#df4a32"/>
                    <ImageButton 
                        source={require('../images/facebook-white.png')} 
                        onPress={onFacebookPress}
                        backgroundColor="#3b5999"
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
                        justifyContent: "space-around"
                    }}>
                    <TextField 
                        title="FIRST NAME"
                        titleFontColor="#9a9fa2"
                        textFontColor="#000000"
                        />
                    <TextField 
                        title="LAST NAME"
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
                    <TextField 
                        title="EMAIL"
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
                    <TextField 
                        title="MOBILE"
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
                                title="NEXT" 
                                fontColor="#ffffff"
                                borderColor="#363f45"
                                backgroundColor="#363f45"
                                onPress={onNextPress}></Button>
                </View>
            </View>   
        </Screen>
    );
  }
}