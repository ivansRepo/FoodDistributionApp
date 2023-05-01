import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeNavigators';


export default function HomeRootNavigator(){
    
    return(
        <NavigationContainer>
            <HomeStack />

        </NavigationContainer>
    )
}