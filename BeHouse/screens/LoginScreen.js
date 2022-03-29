import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitleBlack, PageTitleWhite, SubtTitleWhite, StyledFormArea, StyledTextInput, ButtonText, LeftIcon, RightIcon, StyleButton, StyledTextInputLabel, Colors} from '../components/styles.js';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

const { primary, secondary } = Colors;

const LoginScreen = () => {
    return(
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/logo.png')}/>
                <PageTitleBlack>Login</PageTitleBlack>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
                    <UserTextInput 
                        label="E-mail"
                        placeholder="solideogloria@tulip.com"
                        placeholderTextColor="#A4A4A4"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <UserTextInput 
                        label="Senha"
                        placeholder="* * * * * * * *"
                        placeholderTextColor="#A4A4A4"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>

    );
}

const UserTextInput = ({label, ...props}) => {
    return(
        <View>
            <StyledTextInputLabel>{label}</StyledTextInputLabel>
            <StyledTextInput {...props}/>
        </View>
    )
}

export default LoginScreen;