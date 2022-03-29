import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import  Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

/*
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})
*/

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
    flex: 1px;
    width: 100%;
    align-items: center;
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
    padding: 10px;
`;

export const PageTitleWhite = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`;

export const SubtTitleWhite = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
    text-align: center;
    flex: 1;
    align-items: flex-start;
`;

export const StyledTextInput = styled.TextInput`
    position: absolute;
    width: 260px;
    height: 33px;
    top: 2px;
    border: 0.5px solid #A4A4A4;
    border-radius: 5px;
`;

export const StyledTextInputLabel = styled.Text`
    color: #A4A4A4;
    font-size: 8px;
    text-align: left;
    position: absolute;
    left: 10px;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyleButton = styled.TouchableOpacity`
    position: absolute;
    width: 260px;
    height: 33px;
    left: 50px;
    top: 381px;
    background: #000000;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: 'white';
`;