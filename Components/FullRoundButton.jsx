import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function FullRoundButton({image}) {
  return (
    <TouchableOpacity>
      <View style={styles.container} >
      <Image style={styles.img} source={image}/>
     </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'white',
    width:70,
    height:70,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:25
},
img:{
    height:40,
    width:40
}
})