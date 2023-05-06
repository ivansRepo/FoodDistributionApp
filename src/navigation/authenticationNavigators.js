import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from "../screens/authenticationScreen/SignInScreen";
import WelcomeScreen from "../screens/authenticationScreen/WelcomeScreen";
import RootDonorTabs from "./DonorTabs";
import ProfileScreen from "../screens/profileScreen";
import DonationDetailScreen from "../screens/DonationDetailScreen";
import StatisticScreen from "../screens/StatisticScreen";
import JoinUsScreen from "../screens/JoinUsScreen";
import MauritiusMapScreen from "../screens/MauritiusMapScreen";



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
                name ="ProfileScreen"
                component = {ProfileScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Authentication.Screen 
                name ="DonationDetailScreen"
                component = {DonationDetailScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Authentication.Screen 
                name ="StatisticScreen"
                component = {StatisticScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Authentication.Screen 
                name ="JoinUsScreen"
                component = {JoinUsScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Authentication.Screen 
                name ="MauritiusMapScreen"
                component = {MauritiusMapScreen}
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