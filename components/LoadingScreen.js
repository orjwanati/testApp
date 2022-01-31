
import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';

export default function LoadingScreen({title ="loading"}) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
            <Text style={{padding: 10}}>{title}</Text>
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
    }
  });