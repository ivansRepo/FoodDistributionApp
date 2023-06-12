import React from 'react'
import {View, ScrollView, Text, StyleSheet,Image, FlatList} from 'react-native'
import MyDonationListCard from '../components/MyDonationListCard'
import { Card} from 'react-native-paper';
import HomeHeader from '../components/HomeHeader';
import { foodData } from '../components/Data';
import { useState , useEffect} from 'react';
import { getDonation, queryForDocuments, queryForDocuments1, queryForDocuments2, queryForDonation } from '../database/crud';

export default function MyDonationScreen({navigation}){
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const value = await queryForDocuments1();
          setFoodList(value);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
      console.log("My foodList : " + foodList)
    }, []);
    return(
        <ScrollView>
            <HomeHeader navigation={navigation}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>My Donation List</Text>
                <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
            </View>

            <Card style = { styles.card }>
            <View style={{height:300}}>
            </View>        
            <View style={styles.cardContent}>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20}}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Image style={styles.imageSpoon} source ={ require("../../assets/spoonnfork.png")} />
                        <Text style={{textAlign:"center",marginTop:10, fontWeight:800, color:"white"}}>900 000</Text>
                        <Text style={{fontWeight:500, fontSize:12}}>KGs of food saved</Text>
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Image style={styles.bowl} source ={ require("../../assets/bowl.png")} />
                        <Text style={{textAlign:"center",marginTop:10, fontWeight:800, color:"white"}}>300 000</Text>
                        <Text style={{fontWeight:500, fontSize:12}}>Meals redistributed</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20}}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Image style={styles.imageSpoon} source ={ require("../../assets/rs.png")} />
                        <Text style={{textAlign:"center",marginTop:10, fontWeight:800, color:"white"}}>Rs 3</Text>
                        <Text style={{fontWeight:500, fontSize:12}}>Per meal</Text>
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Image style={styles.bowl} source ={ require("../../assets/apple.png")} />
                        <Text style={{textAlign:"center",marginTop:10, fontWeight:800, color:"white"}}>300 000</Text>
                        <Text style={{fontWeight:500, fontSize:12}}>In value of food saved</Text>
                    </View>
                </View>
                
            </View>
        </Card>

        <View>
          <FlatList
            scrollEnabled={false}
            horizontal={false}
            data={foodList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <MyDonationListCard foodName={item.foodName} location={item.location} quantity={item.quantity} />
              </View>
            )}
          />
        </View>
        </ScrollView>
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
        backgroundColor: "#9DD6EB",
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
    cardContent:{
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,   
        marginHorizontal:30,
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
    imageSpoon:{
    },
   
})