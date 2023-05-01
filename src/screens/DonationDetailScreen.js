import {React,useState} from 'react'
import {ScrollView, View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import { Card, ProgressBar} from 'react-native-paper';
import Header from '../components/header';
import { colors } from '../global/styles';
import AppButton from '../components/button';


export default function DonationDetailScreen({navigation}){
    
    const MAX_LENGTH = 300;
    const [showFullText, setShowFullText] = useState(false);
    
      const toggleText = () => {
        setShowFullText(!showFullText);
      };

      const progress = 0.6; // This is the progress value between 0 and 1
    
      const text = "FeedHomeless,our organisation that provides food to homeless people in Quatre-Bornes! Our food truck will be stationed at La Louise next to the Stadium every night as from 19 30 - 21 30,"
      + "offering delicious and nutritious meals in pack or takeaway form. We believe that everyone deserves access to healthy food, regardless of their circumstances, and we're committed to making a positive impact in our community."
      + "The organization achieves the food distribution by collecting excess food from various food distributors or donors, including food outlets, caterers, restaurants, hotels, and other food services. FeedTheHomeless provides a free"
      + "restaurant service for homeless people, similar to a soup kitchen."
    
      return(
        <ScrollView>
            <Header title = "Donation Details" type ="arrow-left" navigation={navigation} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Donate Food</Text>
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
            <View style={styles.labelContainer}>
                <Text style={styles.statisticLabel}>Total Donations:</Text>
                <Text style={styles.percentageLabel}>{progress * 100}%</Text>
            </View>
            <View style= {{alignItems: 'center',justifyContent: 'center',margin: 10}}>
                <ProgressBar progress={progress} color={colors.buttons} style={styles.progressBar} />
            </View>

            <Text style={styles.foodDetails}>
                {showFullText ? text : text.slice(0, MAX_LENGTH)}
                {text.length > MAX_LENGTH && !showFullText && (
                    <TouchableOpacity onPress={toggleText}>
                    <Text style={styles.readMore}>... read more</Text>
                    </TouchableOpacity>
                )}
                {text.length > MAX_LENGTH && showFullText && (
                    <TouchableOpacity onPress={toggleText}>
                    <Text style={styles.readMore}> read less</Text>
                    </TouchableOpacity>
                )}
            </Text>
            
            <View style={{marginBottom: 20}}>
                <AppButton text = "Donate"/>
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
    labelContainer: {
        marginLeft:30,
        marginRight:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      statisticLabel: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      percentageLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
      },
    progressBar: {
        width: 300,
        height: 20,
        borderRadius: 10,
      },
    cardContent:{
        position: 'absolute',
        bottom: 125,
        left: 0,
        right: 0,   
        marginHorizontal:30,
    },
    foodDetails: {
        marginTop: 20,
        fontSize: 14,
        lineHeight: 22,
        textAlign: "justify",
        marginLeft: 30,
        marginRight: 30,
        color: 'gray',
    },
    
      readMore: {
        color: '#517fa4',
      },
})