import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ProfileScreen from "../screens/profileScreen";



const Home = createStackNavigator();

export default function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen 
                name ="profileScreen"
                component = {ProfileScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Home.Navigator>

        
    )
}