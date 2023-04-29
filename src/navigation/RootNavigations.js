import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './authenticationNavigators';




export default function RootNavigator(){
    
    return(
        <NavigationContainer>
            <AuthenticationStack />

        </NavigationContainer>
    )
}