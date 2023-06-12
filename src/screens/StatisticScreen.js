import {React} from 'react'
import {ScrollView, View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from '../components/header';

export default function StatisticScreen({navigation}){
    
      return(
        <ScrollView>
            <Header title = "SansFaim" type ="arrow-left" navigation={navigation} />
            <View style={{flex:1, marginBottom:15}}>
                <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>    
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/mauritius2.jpg')}
                        />
                    </View>  
                </View>
            </View>
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Our goal </Text>
                    <Text style={styles.description}>What SansFaim aims to do is not only prevent food waste at every stage of the food supply chain, from harvesting in farms to grocery stores, restaurants, food services, and households, but also promote food distribution to the homeless. Food distribution can be done on a large scale by bigger organisations such as food services and grocery stores. Therefore, SansFaim particularly targets these organisations rather than smaller ones so that food can be distributed on a daily basis, ensuring that the homeless do not suffer from hunger. The program allows homeless people to not worry about being fed. When food is donated, they can focus on finding housing and employment, so they can leave homelessness behind.</Text>


                    <Text style={styles.title}>Homelessness Situation </Text>
                    <Text style={styles.description}>The study found that more than 90% of the homeless people lived alone. In the seven days prior to the study, 35 percent had slept in public places or on the streets, while 40 percent had slept at the night in shelters. 17 percent of people were in transitional housing that provided support for the homeless. Six percent of people remained with relatives, friends, or strangers. 2% of respondents admitted to sleeping at their place of employment.</Text>

                    <Text style={styles.title}>Location </Text>
                    <Text style={styles.description}>Port Louis was the area with the most respondents (69%) followed by Quatre-Bornes (26 percent). Respondents reported making only a few trips both inside and between the various regions in which they were located. 51 percent of respondents said they never or seldom moved within the locations where they were actually based, while two thirds of respondents said they rarely or never moved from one place to another.
                    Access to shelter (50 percent),
                    services (48 percent), and employment were the main factors influencing where the homeless choose to live (25 percent). The place where they were born, raised, and/or had friends and family was another factor.</Text>
                
                    <Text style={styles.title}>Access to Food </Text>
                    <Text style={styles.description}>Although most respondents said they were able to eat enough every day and had enough energy for daily activities, it should be noted that 42% of the homeless people surveyed had to skip a meal, 33% had gone without food for an entire day, and 38% had not had a proper/good meal at least once in the week before the survey. Nearly a quarter of respondents reported not having daily access to basic hygiene practices including bathing, brushing their teeth, and donning clean clothes. Similarly, 14% of people reported not having access to clean water every day.  </Text>

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
    marginTop: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
    lineHeight: 24,
  },
})