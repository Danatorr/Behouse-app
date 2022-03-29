import React, { useState } from 'react';
import { View, } from 'react-native';
import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageSubTitleBlack, 
    PageTitleBlack, 
    PageTitleWhite, 
    SubtTitleWhite, 
    StyledFormArea, 
    StyledTextInput, 
    ButtonText, 
    LeftIcon, 
    RightIcon, 
    StyledButton, 
    StyledTextInputLabel, 
    Colors, 
    Line, 
    ErrorMessageBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent

} from '../components/styles.js';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import { Octicions, Ionicons, Fontisto } from '@expo/vector-icons'

const { primary, secondary } = Colors;

const LoginScreen = () => {
    const [hidePassword, setHidePassword] = useState(true)

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
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />

                    <ErrorMessageBox>
                        ...
                    </ErrorMessageBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Entrar
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <PageSubTitleBlack>Entrar com: </PageSubTitleBlack>
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" color={primary} size={48}/>
                    </StyledButton>
                    <ExtraView>
                        <TextLink>
                            <TextLinkContent>
                                Cadastre-se
                            </TextLinkContent>
                        </TextLink>
                    </ExtraView>

                    </StyledFormArea>
                    )}

                </Formik>
            </InnerContainer>
        </StyledContainer>

    );
}

const UserTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <StyledTextInputLabel>{label}</StyledTextInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={"#A4A4A4"}/>
                </RightIcon>
            )}
        </View>
    )
}

export default LoginScreen;