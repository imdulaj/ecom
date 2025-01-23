import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import InputField from '../Components/InputField';
import RoundButton from '../Components/RoundButton';

export default function Signup() {


  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#ffffff'} />
      <Text style={styles.txt1}>Sign Up</Text>
      <Text>Signup here</Text>
      <View style={styles.inputs}>
        <InputField placeholder={'email'} keyboardType={'email-address'} />
        <InputField placeholder={'password'} secureTextEntry={true} />
        <RoundButton  label={'SignUp'} />
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        padding:15
    },
    txt1:{
        fontSize:40,
        color:'black',
        fontWeight:'bold'
    },
    inputs:{
        flex:1,
        justifyContent:'center',
        
    }
})