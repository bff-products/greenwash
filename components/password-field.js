
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import TextField from './text-field.js';

export default class PasswordField extends Component<{}>{
    render() {
        return (
          <TextField 
            title={this.props.title}
            titleFontColor={this.props.titleFontColor}
            textFontColor={this.props.textFontColor}
            isPassword={true}
          />
      );
    }
  }