import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default function createDrawerNavigator(){

    return(
        <Drawer.Navigator>

        <Drawer.Screen 
            name = "DonorTabs"
        />

        </Drawer.Navigator>
    )
}