import React from 'react';
import { View, Text, StyleSheet ,ImageBackground} from 'react-native';



export default function Splash() {

    // setTimeout(() => {
    //     navigation.navigate('Signin');
    // },2000);


  return (
    <ImageBackground source={require('../Assets/splash2.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>DeeMart</Text>
        <Text style={styles.slogan}>Your One-Stop Style Destination</Text>
      </ImageBackground>
  );
}



const styles = StyleSheet.create({
    image:{
        flex:1,
        padding:15
    },
    title:{
        fontSize:45,
        color:'white',
        fontWeight:500,
        alignSelf:'center',
        marginTop:'25%'
        

    },
    slogan:{
        fontSize:20,
        color:'white',
        alignSelf:'center'

    }
})