import {React,useState} from 'react'
import {ScrollView, View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import { Card} from 'react-native-paper';
import Header from '../components/header';

export default function StatisticScreen({navigation}){
    
      return(
        <ScrollView>
            <Header title = "Donation Details" type ="arrow-left" navigation={navigation} />
            <View style={{flex:1, marginBottom:15}}>
                <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>    
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_pack1.jpeg')}
                        />
                        <Text style={styles.imageTextStyle}>Feed Homeless in Quatres Bornes</Text>
                    </View>  
                </View>
            </View>
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Our Goal</Text>
                    <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        textAlign:"center",
        height:220
    },
    imageSlide: {
        resizeMode: 'cover',
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position:'absolute'
    },
    imageTextStyle: {  
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      marginTop:30,
      lineHeight:30,
      textAlign:"center"
  },
  textContainer: {
    paddingTop: 10,
    marginHorizontal: 20,
    marginBottom:20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',

  },
})