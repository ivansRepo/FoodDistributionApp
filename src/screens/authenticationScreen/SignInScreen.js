import React,{useState,useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput,Button} from 'react-native'
import { Icon,SocialIcon} from "react-native-elements";
import Header from "../../components/header"
import {colors,parameters, title} from "../../global/styles"
import * as Animatable from "react-native-animatable"
import AppButton from "../../components/button";


export default function SignInScreen({navigation}){

    const[textInput2Focussed, setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)


    return(
        <View style={styles.container}>
            <Header title = "MY ACCOUNT" type ="arrow-left" navigation={navigation} />
            <View>
                <Text style ={title}>Sign In</Text>
            </View>
            <View style ={{alignItems:"center",marginTop:10}}>
                <Text style= {styles.text1}>Please enter the email and password</Text>
                <Text style= {styles.text1}>Register with your account</Text>
            </View>
            <View style ={{marginTop:20}}>
                <View>
                    <TextInput 
                        style ={styles.TextInput1}
                        placeholder="Email"
                        ref ={textInput1}
                        onFocus ={()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput2Focussed(true)
                        }}
                     />
                </View>
                <View style ={styles.TextInput2}>
                    <Animatable.View animation ={textInput2Focussed?"":"fadeInRight"} duration={400}>
                        <Icon
                            name = "lock"
                            iconstyle ={{color:colors.grey3}}
                            type = "material"
                        />
                    </Animatable.View>
                    <TextInput 
                        style= {{width:"80%"}}
                        placeholder="Password"
                        ref ={textInput2}
                        onFocus ={()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput2Focussed(true)
                        }}
                     />
                    <Animatable.View animation ={textInput2Focussed?"":"fadeInLeft"} duration={400}>
                    <Icon
                            name = "visibility-off"
                            iconstyle ={{color:colors.grey3}}
                            type = "material"
                            style={{marginRight:10}}
                        />
                    </Animatable.View>
                </View>
            </View>
            
            <View style={{marginTop:40}}>
                <AppButton text="Sign In" onClick= {()=>navigation.navigate("RootDonorTabs")}/>
            </View>

            <View style = {{alignItems:"center",marginTop:40}}>
                <Text style={{...styles.text1, textDecorationLine: "underline"}}> Forgot Password ?</Text>
            </View>

            <View style ={{alignItems:"center",marginTop:10, marginBottom:20}}>
              <Text style={{fontSize:16, fontWeight:"bold"}}>OR</Text>  
            </View>

            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style ={styles.SocialIcon}
                    onPress = {()=>{}}
                />
            </View>

            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style ={styles.SocialIcon}
                    onPress = {()=>{}}
                />
            </View>

            <View style = {{alignItems:"center",marginTop:20}}>
                <Text style={{...styles.text1}}> New on SansFaim ?</Text>
            </View>

            <View style={{marginTop:40}}>
                <AppButton text="Create an Accont" onClick= {()=>navigation.navigate("HomeScreen")}/>
            </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        marginBottom:20,
        borderRadius:12,
        paddingLeft:15,
        height: 40
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15,
        height: 40
    },

    SocialIcon:{
        borderRadius:12,
        height:50
        
    }

})