import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitleBlack, PageTitleWhite } from '../components/styles.js';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    return(
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/logo.png')}/>
                <PageTitleBlack>Login</PageTitleBlack>
            </InnerContainer>
        </StyledContainer>

    );
}
/*
function LoginScreen(props) {
    return (
        <ImageBackground 
            style={style.background}
            source={require("../assets/background.png")}>
            <View style={style.logoContainter}>
                <Image source={require("../assets/splash.png")} style={style.logo}/>
                <Text style={style.title}>Seja bem vindo(a)!</Text>
            </View>
            <View style={style.loginButton}>
                <Text style={style.center}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={style.center}>Cadastrar-se</Text>
            </View>
        </ImageBackground>
        
        <SafeAreaView style={style.background}>
            <View>Teste</View>
        </SafeAreaView>

        );
}
*/

export default LoginScreen;