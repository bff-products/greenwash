
import React, { Component } from 'react';
import Button from './button.js';

export default class LinkButton extends Component<{}>{
    render() {
        return (
          <Button 
          title={this.props.title}
          fontColor={this.props.fontColor}
          borderColor="#ffffff"
          backgroundColor="#ffffff"
          onPress={this.props.onPress}></Button>
      );
    }
  }