import React,{useState,useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput,Button,Alert} from 'react-native'
import { Icon,SocialIcon} from "react-native-elements";
import Header from "../../components/header"
import {colors,parameters, title} from "../../global/styles"
import * as Animatable from "react-native-animatable"
import AppButton from "../../components/button";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { logUser } from "../../database/crud";

export default function SignInScreen({navigation}){

    const[textInput2Focussed, setTextInput2Focussed] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    //SIGN IN FIREBASE
    const loginUser = ()=>{

        logUser(true,"user_id")

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const user_id = user.uid; //userID
            logUser(true,user_id)
            
            console.log("Login successful")
            navigation.navigate("RootDonorTabs")
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found'){
                Alert.alert('Error','User not found with the provided credential');
              }
              else if (error.code === 'auth/invalid-email' ||error.code === 'auth/wrong-password'){
                Alert.alert('Error','Invalid email or password');
              }
              else{
                Alert.alert('Error','An error occurred');
              }
            });
    }



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
                        value={email} 
                        onChangeText={email => setEmail(email)}
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
                        value={password} 
                        onChangeText={password => setPassword(password)}
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
                <AppButton text="Sign In" onClick= {loginUser}/>
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