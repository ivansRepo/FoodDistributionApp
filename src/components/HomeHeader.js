import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { Icon } from "react-native-elements/dist/icons/Icon";
import {colors,parameters} from "../global/styles"

export default function HomeHeader({title,type,navigation}){

    return(
        
        <View style ={styles.header}>
            <View style = {{align:"center", justifyContent:"center",marginLeft:0,flex:1}}> 
                <Icon type = "material-community"
                    name = "menu"
                    color = {colors.headerText}
                    size = {28}
                    onPress = {()=>{navigation.goBack()}}
                    />
            </View>
            <View style={{flex:3}}>
                <Text style = {styles.headerText}>SansFaim</Text>
            </View>      
            <View style = {{align:"center", justifyContent:"center",marginLeft:15,flex:1}}>
                <Image 
                    style={{height:32, width:32, alignItems:"center", justifyContent:"center",marginLeft:15}}
                    source ={require('../../assets/account.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        
    },
    headerText:{
        flexDirection:"row",
        color:colors.headerText,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:30,
        alignContent:"center",
        justifyContent:"center",
        flex:3

    }
})