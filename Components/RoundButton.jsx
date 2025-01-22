import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RoundButton({label , border = false}) {
  return (
   <TouchableOpacity>
     <View style={[
        styles.btn,
        border && { backgroundColor: 'white', borderWidth: 1 },
      ]}>
      <Text style={[styles.btntxt, border && { color: 'black' }]}>{label}</Text>
     </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'black',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:25,
        width:130,
        marginLeft:10,
        borderColor:'black',
       
    },
    btntxt:{
        color:'white',
        textAlign:'center',
        

    }
})