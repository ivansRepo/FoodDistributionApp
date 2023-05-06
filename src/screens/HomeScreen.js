import React from "react";
import  {ScrollView,View,Text,StyleSheet,FlatList,Dimensions, TouchableOpacity} from 'react-native'
import HomeHeader from "../components/HomeHeader";
import DonationCard from "../components/DonationCard";
import StatisticCard from "../components/StatisticCard";
import JoinUsCard from "../components/JoinUsCard";
import { filterData } from "../components/Data";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}){
    return (
        <View style ={styles.container}>
        <ScrollView >
            <HomeHeader navigation={navigation}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Hello changemaker</Text>
                <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
            </View>

            <FlatList
            horizontal = {true}
            data={filterData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                <View>
                    <DonationCard 
                        navigation={navigation}
                        image={item.image}
                        meal={item.meals}
                        location= {item.location}
                        supporter={item.supporter}

                    />
                </View>
            )   
            }

            /> 
            

            <View style={styles.textContainer}>
                <Text style={{fontSize:22,fontWeight: 'bold'}}>Together, we can end hunger amongst homeless</Text>
            </View>

            <StatisticCard navigation={navigation}/>

            <View style={{marginTop:40, marginBottom:40}}>
                <JoinUsCard navigation={navigation}/>
            </View>

        </ScrollView>
        <View style={styles.floatingButton}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("MauritiusMapScreen")
                }}
                >
                <Icon
                    name="place"
                    type="material"
                    size={32}
                    color = {colors.buttons}
                />
                <Text style ={{color:colors.grey2}}>Map</Text>
            </TouchableOpacity>
        </View>
        </View>
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
      floatingButton: {
        position:"absolute",
        bottom:10,
        right:15,
        backgroundColor:"white",
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center"
      }
})