import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../global/styles';
import DonateScreen from '../screens/DonateScreen';
import MyDonationScreen from '../screens/MyDonationScreen';

const DonorTabs = createBottomTabNavigator();

export default function RootDonorTabs(){

    return(
        <DonorTabs.Navigator
                    screenOptions={{
                        activeTintColor : colors.buttons,
                        headerShown: false // Set headerShown to false to hide the header
                      }}
        >
            <DonorTabs.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options={
                    {
                        tabBarLabel : "home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name = "home"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )

                    }
                }
            />
            <DonorTabs.Screen 
                name='DonateScreen'
                component={DonateScreen}
                options={
                    {
                        tabBarLabel : "Donate",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name = "favorite"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )

                    }
                }
            />
            <DonorTabs.Screen 
                name='MyDonationScreen'
                component={MyDonationScreen}
                options={
                    {
                        tabBarLabel : "MyDonation",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name = "list"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
        </DonorTabs.Navigator>
    )
}