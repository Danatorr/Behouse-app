import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, TextInput, Dimensions } from 'react-native';

//Full Widht
var width = Dimensions.get('window').width;

export default function Header(){
    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>BeHouse IBT</Text>
            {/*<Image source={require('../assets/splash.png')} style={styles.image}/>*/}
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 80,
        backgroundColor: 'coral',
        width: width,
      },
      title: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
      },
      image: {
        
      },
});