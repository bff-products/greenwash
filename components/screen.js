
import React, { Component } from 'react';
import {View, Dimensions, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Screen extends Component<{}>{

  constructor(props) {
    super(props);

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

    render() {

      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {this.props.children}
        </View>
      );
    }
  }