import 'react-native-gesture-handler';
import React from "react"
import {View, Text,StyleSheet,StatusBar} from "react-native"
import {colors} from "./src/global/styles"
import RootNavigator from "./src/navigation/RootNavigations"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toast from 'react-native-toast-message';


const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar barStyle = "light-content" backgroundColor = {colors.statusbar}/>
      <Toast />
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})