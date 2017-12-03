
import React, { Component } from 'react';
import {View, Dimensions, Image, Text, Touchable, Button, Alert} from 'react-native';
import HeaderButton from '../components/header-button.js';
import { StackNavigator } from 'react-navigation';

export default class Screen extends Component<{}>{

  constructor(props) {
    super(props);
    
    const dim = Dimensions.get('screen');
    if(dim.height >= dim.width)
    {
        this.state = {orientation: 'PORTRAIT'};
    }
    else{
        this.state = {orientation: 'LANDSCAPE'};
    }

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
        const dim = Dimensions.get('screen');
        if(dim.height >= dim.width)
        {
            this.setState({orientation: 'PORTRAIT'});
        }
        else{
            this.setState({orientation: 'LANDSCAPE'});
        }
    });
}
    render() {

      const {goBack} = this.props.navigation;

      function back(){
        goBack();
      }

      const headerHeight = 60;

      return (
        <View style={{flex: 1}}>
          <View style={{
              height: (this.props.showHeader? headerHeight : 0), 
              backgroundColor: "#fd9f00",
              justifyContent: "center"}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
                >
                
                  <HeaderButton 
                        source={require('../images/back.png')}
                        style={{
                          width: 25,
                          height: 25,
                          marginLeft: 15,
                          marginRight: 15
                        }}
                        onPress={back}
                        >
                  </HeaderButton>
                
                <Text style={{
                  color: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  fontSize: 22,
                  marginTop: -2                  
                }}>{this.props.headerLabel}</Text>
              </View>
          </View>
          <View style={{
            flex: 1,
            height: (this.props.showHeader? window.height - headerHeight : window.height),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#ffffff"
          }}>
            {this.props.children}
          </View>
        </View>
      );
    }
  }