
import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';

export default class TextField extends Component<{}>{
    render() {
        return (
        <View style={{marginTop: 5, flex: 1 }}
            >
            <Text style={{
                color: this.props.titleFontColor,
                fontSize: 16}}>{this.props.title}</Text>
            <TextInput
                style={{
                    height: 50, 
                    fontSize: 20
                }}
                placeholder=""
                secureTextEntry={this.props.isPassword}/>
        </View>
      );
    }
  }