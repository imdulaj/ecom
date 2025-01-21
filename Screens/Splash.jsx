import React from 'react';
import { View, Text, StyleSheet ,ImageBackground} from 'react-native';

export default function Splash() {
  return (
    <ImageBackground source={require('../Assets/splash2.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Splash</Text>
      </ImageBackground>
  );
}



const styles = StyleSheet.create({
    image:{
        flex:1
    },
    text:{
        fontSize:20,
        color:'red'
    }
})