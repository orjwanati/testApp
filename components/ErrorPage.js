
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function ErrorScreen({msg="", retry=()=>{}}) {
    
    return (
        <View style={styles.container}>
            <Text  style={styles.text}> Something Went Wrong!</Text>
            <Text style={styles.subtext}>Message: {msg}</Text>
            <Text  onPress={retry} style={styles.underline}> Please Try Again!</Text>
            
        </View>
    ) 
}


const styles = StyleSheet.create({
    container: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
        color:'#DD1f1f',
        margin: 15,
      },
    text: {
        color:'#DD1f1f',
        fontWeight: 'bold',
        fontSize: 14,
      },
      subtext: {
        color:'#DD1f1f',
        fontWeight: 'normal',
        fontSize: 14,

        margin: 15,

      },
      underline: {
        textDecorationLine:'underline',
        color:'#DD1f1f',

      }
  });