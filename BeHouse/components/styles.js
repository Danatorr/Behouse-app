import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import  Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#FFFFFF',
    secondary: '#000000',
};

const {primary, secondary} = Colors;

export const StyledContainer = styled.View`
    flex: 1px;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

    ${(props) => props.cadastro == true && `
        position: absolute;
        top: 100px;
        height: 105%;
        flex: 1;
        width: 115%;
        align-items: center;
        align-self: center;
        
        border-radius: 40px;
        background-color: ${secondary}
    `}
`;

export const PageLogo = styled.Image`
    height: 140px;
    width: 141px;
`;

export const PageTitleBlack = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding-top: 75px;
`;

export const PageSubTitleBlack = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding-top: 20px;
`;

export const PageTitleWhite = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`;

export const PageSubTitleWhite = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${primary};

    position: absolute;
    top: 320px;
    align-self: center;
`;

export const StyledFormArea = styled.View`
    text-align: center;
`;

export const StyledTextInput = styled.TextInput`
    width: 260px;
    height: 33px;
    border: 0.5px solid #A4A4A4;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 55px;
    margin-vertical 3px;
    margin-top: 20px;
`;

export const StyledTextInputLabel = styled.Text`
    color: #A4A4A4;
    font-size: 8px;
    text-align: left;
    position: absolute;
    top: 14px;
    left: 10px;
    background-color: ${primary}
    z-index: 1;
    padding: 0px 2px;

    ${(props) => props.cadastro == true && `
        color: #A4A4A4;
        font-size: 8px;
        text-align: left;
        position: absolute;
        top: 14px;
        left: 10px;
        background-color: ${secondary}
        z-index: 1;
        padding: 0px 2px;
    `}
    
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 27px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    position: absolute;
    width: 260px;
    height: 33px;
    top: 125px;
    background: #000000;
    border-radius: 5px;
    align-items: center;
    padding-top: 6px;

    ${(props) => props.google == true && `
        position: absolute;
        width: 60px;
        height: 60px;
        top: 197px;
        background: #000000;
        border-radius: 5px;
        align-items: center;
        align-self: center;
        padding-top: 6px;
        border-radius: 90px;
    `}

    ${(props) => props.cadastroGoogle == true && `
        position: absolute;
        width: 60px;
        height: 60px;
        top: 350px;
        background: ${primary};
        border-radius: 5px;
        align-items: center;
        align-self: center;
        padding-top: 6px;
        border-radius: 90px;
    `}

    ${(props) => props.cadastro == true && `
        position: absolute;
        width: 260px;
        height: 33px;
        top: 280px;
        background: ${primary};
        border-radius: 5px;
        align-items: center;
        padding-top: 6px;
    `}
`;

export const ButtonText = styled.Text`
    color: white;

    ${(props) => props.cadastro == true && `
        color: black;
    `}
`;

export const ErrorMessageBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${secondary};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-self: center;
    padding: 10px;
    background-color: ${secondary};
    position: absolute;
    width: 116%;
    height: 170px;
    top: 355px;
    
    border-radius: 30px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${primary};
    font-size: 18px;
    position: absolute;
    bottom: 78px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${primary};
    font-size: 18px;
    position: absolute;
    bottom: 40px;
`;