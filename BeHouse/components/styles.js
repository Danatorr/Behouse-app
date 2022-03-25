import styled from "styled-components";
import { View, Text, Image } from 'react-native';
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