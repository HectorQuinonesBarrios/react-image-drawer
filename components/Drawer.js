import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native'
import ExpoPixi from 'expo-pixi';
import ViewShot from "react-native-view-shot"
const color = 0x0000ff
const width = 5
const alpha = 0.5

export default class Drawer extends Component {
    
    state = {
        source: require('./../assets/Placeholder.png')
    }

    capture = () => {
        this.refs.viewShot.capture().then(uri => {
            console.log(uri)
            this.setState({source: {uri}})
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1 }} style={{flex:2}}>                    
                    <ImageBackground source={this.state.source} style={{width: '100%', height: '100%'}}>
                        <ExpoPixi.Sketch 
                        ref={ref => this.sketch = ref}
                        style={{flex:1, backgroundColor: 'rgba(255, 255, 255, 0)'}}
                        strokeColor={color}
                        strokeWidth={width}
                        strokeAlpha={alpha}
                        />
                    </ImageBackground>
                </ViewShot>
                <View style={{bottom:0, left: 0, height: 100, width:'100%'}}>
                    <TouchableOpacity style={{flex:1, backgroundColor: 'gray', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Capture</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



