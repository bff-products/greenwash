import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import MapView from 'react-native-maps';
import Screen from '../components/screen.js';
import ScreenComponent from '../components/screen-component.js';

export default class HomeScreen extends Component<{}> {
    
    constructor(props){
        super(props);

        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
          };
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }

    onRegionChange(region) {
        //this.setState({ region });
    }

    render() {
        const { navigate } = this.props.navigation;

        const styles = StyleSheet.create({
            map: {
              ...StyleSheet.absoluteFillObject,
            },
          });
    
        return (
        
            <Screen navigation={this.props.navigation}
                showHeader={true}
                headerLabel="Green Wash">
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker
                        coordinate={{latitude: this.state.latitude,
                            longitude: this.state.longitude}}
                        title="Here you are"
                        description="Test Description"
                        />
                </MapView>
                <View style={{backgroundColor: "#ffffff", position: "absolute", top: 10, alignContent: "stretch"}}>
                    <Text>Lat: {this.state.latitude} - Lng: {this.state.longitude} - {this.state.error}</Text>
                </View>
            </Screen>
        );
    }

    
}