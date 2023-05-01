import React from "react";
import  {ScrollView,View,Text,StyleSheet} from 'react-native'
import HomeHeader from "../components/HomeHeader";
import DonationCard from "../components/DonationCard";
import StatisticCard from "../components/StatisticCard";
import JoinUsCard from "../components/JoinUsCard";

export default function HomeScreen({navigation}){
    return (
        <ScrollView style ={styles.container}>
            <HomeHeader navigation={navigation}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Hello changemaker</Text>
                <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
            </View>

            <DonationCard />

            <View style={styles.textContainer}>
                <Text style={{fontSize:22,fontWeight: 'bold'}}>Together, we can end hunger amongst homeless</Text>
            </View>

            <StatisticCard />

            <View style={{marginTop:40, marginBottom:40}}>
                <JoinUsCard />
            </View>

            
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textContainer: {
        paddingTop: 20,
        marginHorizontal: 20,
        marginBottom:20,
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 28,
      },
      description: {
        fontSize: 16,
        marginTop: 10,
        color: 'gray',
        fontStyle: 'italic'
      },
})