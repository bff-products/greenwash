
import React, { Component } from 'react';
import {View, Text, Alert, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

export default class Button extends Component<{}>{
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

      return (
        <Touchable
            onPress={this.props.onPress}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: this.props.backgroundColor,
                height: 50,
                alignItems: 'center',
                borderRadius: 4,
                borderColor: this.props.borderColor,
                borderWidth: 1,
                margin: 5
                }}
                >
            <Text
                style={{
                    color: this.props.fontColor
                }}>
                {this.props.title}</Text>
            </View>
        </Touchable>
      );
    }
  }