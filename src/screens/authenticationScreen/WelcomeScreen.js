import React,{useState,useRef} from "react";
import {View, Text, StyleSheet, Dimensions,Button, Image} from 'react-native'
import Swiper from "react-native-swiper";
import AppButton from "../../components/button";


export default function WelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>
                <Swiper autoplay ={true}>
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../../assets/food_donation.jpeg')}

                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../../assets/food_pack1.jpeg')}

                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../../assets/food_donation5.jpeg')}

                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../../assets/food_truck2.jpeg')}

                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:2, alignItems:"center",marginTop:15}}>
                <View style={{alignItems:"center",marginTop:20}}>
                    <Text style={{fontSize:24,fontWeight:700,marginTop:10}}>Share a meal</Text>
                    <Text style={{fontSize:24,fontWeight:700,marginTop:10}}>Share your heart</Text>
                </View>

                <View style={{alignItems:"center",marginTop:20, width:"75%"}}>
                    <Text style={{fontSize:14,fontWeight:200, textAlign:"center",lineHeight:25}}>Join Our Movement and Help Us Serve Hot Meals to the Homeless Every Day</Text>
                </View>

            </View>
            <View style={{flex:2, justifyContent:"flex-end",marginBottom:60}}>
                <View style={{marginTop:0}} >
                    <AppButton text="Sign In" onClick= {()=>navigation.navigate("SignInScreen")}/>
                </View>
                <View style={{marginTop:60}}>
                    <AppButton text="Register" onClick={()=>navigation.navigate("SignUpScreen")}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    slide1: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    slide2: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    slide3: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    imageSlide: {
        resizeMode: 'cover',
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})