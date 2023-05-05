import {React, useState} from 'react'
import {ScrollView, View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../components/header';
import AppButton from '../components/button';

export default function JoinUsScreen({navigation}){

    const MAX_LENGTH = 700;
    const [showFullText, setShowFullText] = useState(false);
    
      const toggleText = () => {
        setShowFullText(!showFullText);
      };

      const text = "SansFaim is a social enterprise that fights against food waste to create a more inclusive and circular economy by redistributing excess food, including to the homeless. The organization partners with grocery stores, supermarkets, hotels, caterers, restaurants, and others who wish to donate their excess or leftover food. SansFaim is responsible for collecting the donated food and distributing it to the homeless through a special service provided by FeedTheHomeless, which offers free meals at a restaurant for the homeless."
      + "The service operates like a soup kitchen, offering dinner to homeless people by gathering excess food left over from lunch. Volunteers working at the organization collect the leftover food in the afternoon between 4 p.m. and 6 p.m. They then pack the food and load it onto food trucks, which depart for specific locations where there is a high concentration of homeless people."
    
      return(
        <ScrollView>
            <Header title = "About Us" type ="arrow-left" navigation={navigation} />
            <View style={{flex:1, marginBottom:15}}>
                <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>    
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_pack1.jpeg')}
                        />
                    </View>  
                </View>
            </View>
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>About Us </Text>
                    
                    <Text style={styles.description}>
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

                </View>
            </View>

            <AppButton text={"Join Us"} />

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
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
    lineHeight: 24,
  },
  readMore: {
    color: '#517fa4',
  },
})