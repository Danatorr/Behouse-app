import React, { useState } from 'react';
import { View, } from 'react-native';
import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageSubTitleBlack, 
    PageTitleBlack, 
    PageTitleWhite, 
    PageSubTitleWhite, 
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

const SignUpScreen = () => {
    const [hidePassword, setHidePassword] = useState(true)

    return(
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer cadastro={true}>
                <PageLogo resizeMode="cover" source={require('../assets/logo.png')}/>
                <PageTitleWhite>Cadastre-se</PageTitleWhite>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
                        <UserTextInput 
                            label="Nome Completo"
                            placeholder="Jesus Cristo"
                            placeholderTextColor="#A4A4A4"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <UserTextInput 
                            label="Nome de Usuário"
                            placeholder="Jesus Cristo"
                            placeholderTextColor="#A4A4A4"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
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
                        <UserTextInput 
                            label="Digite Novamente a senha"
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
                    <StyledButton onPress={handleSubmit} cadastro={true}>
                        <ButtonText cadastro={true}>
                            Entrar
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <PageSubTitleWhite>Cadastrar-se com: </PageSubTitleWhite>
                    <StyledButton cadastroGoogle={true} onPress={handleSubmit}>
                        <Fontisto name="google" color={secondary} size={48}/>
                    </StyledButton>
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
            <StyledTextInputLabel cadastro={true}>{label}</StyledTextInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={"#A4A4A4"}/>
                </RightIcon>
            )}
        </View>
    )
}

export default SignUpScreen;