import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import RoundButton from '../Components/RoundButton';
import FullRoundButton from '../Components/FullRoundButton';

export default function Signin({navigation}) {

    const gosignin = () => {
        navigation.navigate('Signup');
      };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#ffffff'} />
        <View style={styles.view1}>
            <Image style={styles.signImg} source={require('../Assets/signin.jpg')} />
        </View>

        <View style={styles.view2}>
            <Text style={styles.txt1}>Hello</Text>
            <Text style={styles.txt2}>Welcome to DeeMart </Text>
            <View style={styles.btnarea}>
                <RoundButton label={'Sign In'} />
                <RoundButton onPress={gosignin} border={true} label={'Sign Up'} />
                
            </View>

            <Text style={styles.txt3}>Or via another account </Text>

            <View style={styles.sbtnarea}>
                <FullRoundButton image={require('../Assets/facebook.png')} />
                <FullRoundButton image={require('../Assets/google.png')} />
                <FullRoundButton image={require('../Assets/linkedin.png')} />
            </View>


        </View>
      
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }, 
    view1:{
        flex:0.5
    },
    view2:{
        flex:0.5,
        backgroundColor:'#ffffff'
    },
    signImg:{
        width:'100%',
        height:'100%'
    },
    txt1:{
        textAlign:'center',
        fontSize:40,
        color:'black',
        fontWeight:'bold'
    },
    txt2:{
        textAlign:'center',
        fontSize:15,
        marginBottom:10
    },
    btnarea:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        marginBottom:40
    },
    txt3:{
        textAlign:'center',
        marginTop:10,
        fontSize:15
    },
    sbtnarea:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'center'
    }

})
