import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import MyDonationListCard from '../components/MyDonationListCard'
import { Card} from 'react-native-paper';
import HomeHeader from '../components/HomeHeader';


export default function MyDonationScreen({navigation}){

    return(
        <View>
            <HomeHeader navigation={navigation}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>My Donation List</Text>
                <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
            </View>

            <Card style = { styles.card }>
            <View style={{height:300}}>
                <Image source ={ require("../../assets/food_truck2.jpeg")} style = { styles.image } />
                
            </View>        
            <View style={styles.cardContent}>
                <Text style={styles.imageTextStyle}>Join SansFaim and deliver a meal to the homeless</Text>
            </View>
        </Card>

            <View>   
                < MyDonationListCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        paddingTop: 20,
        marginHorizontal: 20,
        marginBottom:20,
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign:"center"
      },
      description: {
        fontSize: 16,
        marginTop: 10,
        color: 'gray',
        fontStyle: 'italic'
      },
      card: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        overflow: 'hidden',
        marginBottom: 20,
        
        shadowOffset: {
        width: 0,      
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        padding:0,
        backgroundColor: '#000',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: "100%",
        resizeMode: 'cover',
        height: "100%",
    },
    imageTextStyle: {  
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginTop:30,
        paddingRight:40,
        lineHeight:30
    },
    cardContent:{
        position: 'absolute',
        bottom: 125,
        left: 0,
        right: 0,   
        marginHorizontal:30,
    }
})