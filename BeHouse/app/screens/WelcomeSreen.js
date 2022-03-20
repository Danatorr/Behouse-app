import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

function WelcomeSreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.png")}>
            <View style={styles.logoContainter}>
                <Image source={require("../assets/splash.png")} style={styles.logo}/>
                <Text style={styles.title}>Seja bem vindo(a)!</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.center}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.center}>Cadastrar-se</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
        alignItems: 'center',
    },
    center: {
        position: 'relative',
        top: '35%',
    },
    logoContainter: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    title: {
        color: 'white'
    }
})

export default WelcomeSreen;