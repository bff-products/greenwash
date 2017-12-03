
import React, { Component } from 'react';
import {View, Dimensions, Image, Text, Touchable, Button, Alert} from 'react-native';
import ImageButton from '../components/image-button.js';
import { StackNavigator } from 'react-navigation';

export default class ScreenComponent extends Component<{}>{

    
  constructor(props) {
    super(props);
    
    this.state = {orientation: 'PORTRAIT'};
    /*
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
    */
    }

    /*
    componentWillUnmount(){
        removeEventListener('change');
    }
    */
    
    render() {

      return (
          <View/>
      );
    }
  }