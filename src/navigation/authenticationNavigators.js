import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from "../screens/authenticationScreen/SignInScreen";
import WelcomeScreen from "../screens/authenticationScreen/WelcomeScreen";
import RootDonorTabs from "./DonorTabs";

const Authentication = createStackNavigator();

export default function AuthenticationStack(){
    return(
        <Authentication.Navigator>
            <Authentication.Screen 
                name ="WelcomeScreen"
                component = {WelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Authentication.Screen 
                name ="SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Authentication.Screen 
                name ="RootDonorTabs"
                component = {RootDonorTabs}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Authentication.Navigator>

        
    )
}