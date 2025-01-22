import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function InputField({placeholder,keyboardType="default",secureTextEntry=false}) {
  return (
    <View style={styles.container} >
      <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginBottom:15

    }
})