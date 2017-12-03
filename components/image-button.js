
import React, { Component } from 'react';
import {Image, View, Platform, TouchableNativeFeedback, TouchableOpacity, StyleSheet} from 'react-native';

export default class ImagemButton extends Component<{}>{

    render() {

        const styles = StyleSheet.create({
            view: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: this.props.backgroundColor,
                height: 50,
                alignItems: 'center',
                borderRadius: 4,
                borderColor: this.props.borderColor,
                borderWidth: 1,
                margin: 5
            }
        });

        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <Touchable onPress={this.props.onPress}>
                <View style={[styles.view]}>
                    <Image 
                        source={this.props.source} 
                        resizeMode="center"
                        style={{
                            height: 30
                        }}/>
                </View>
            </Touchable>
        );
    }
  }