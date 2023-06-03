import React,{useState,useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput,Button} from 'react-native'
import { Icon,SocialIcon} from "react-native-elements";
import Header from "../../components/header"
import {colors,parameters, title} from "../../global/styles"
import * as Animatable from "react-native-animatable"
import AppButton from "../../components/button";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";



export default function SignUpScreen({navigation}){

    const[textInput2Focussed, setTextInput2Focussed] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //SIGN IN FIREBASE
    const createUser = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Create user
            const user = userCredential.user;
            const user_id = user.uid; //userID
            console.log("User created")
            setEmail('');
            setPassword('');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    return(
        <View style={styles.container}>
            <Header title = "MY ACCOUNT" type ="arrow-left" navigation={navigation} />
            <View>
                <Text style ={title}>Sign Up</Text>
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

                <View style ={styles.TextInput3}>
                    <Animatable.View animation ={textInput2Focussed?"":"fadeInRight"} duration={400}>
                        <Icon
                            name = "repeat"
                            iconstyle ={{color:colors.grey3}}
                            type = "material"
                        />
                    </Animatable.View>
                    <TextInput 
                        style= {{width:"80%"}}
                        placeholder="Repeat Password"
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
                <AppButton text="Create Account" onClick= {createUser}/>
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
        height: 40,
        marginBottom: 20
    },
    TextInput3:{
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