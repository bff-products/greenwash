
import React, { Component } from 'react';
import {Image, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

export default class HeaderButton extends Component<{}>{
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

      return (
        <Touchable
            onPress={this.props.onPress}>
            <Image
                source={this.props.source}
                style={this.props.style}
                />
        </Touchable>
      );
    }
  }