import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Card,IconButton, ProgressBar } from 'react-native-paper';
import AppButton from './button';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';


const DonationCard = ({navigation}) => {

    const progress = 0.6; // This is the progress value between 0 and 1

    return(
        <Card onPress={()=>{navigation.navigate("DonationDetailScreen")}} style = { styles.card }>
            <View style={{height:200}}>
                <Image source ={ require("../../assets/food_truck2.jpeg")} style = { styles.image } />
            </View>        
            <View style={styles.iconStyle} >
                <Icon
                    name = "share"
                    color = {colors.headerText}
                    type = "material"
                    style={{marginRight:10}}
                    onPress = {()=>{}}
                />
            </View>
            <View >
                <Text style={styles.imageTextStyle}>Feed Homeless in Quatre-Bornes</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.statisticLabel}>Total Donations:</Text>
                <Text style={styles.percentageLabel}>{progress * 100}%</Text>
            </View>
            <View style= {{alignItems: 'center',justifyContent: 'center',padding: 10}}>
                <ProgressBar progress={progress} color={colors.buttons} style={styles.progressBar} />
            </View>
            
            <AppButton text= "Donate Now"/>
            
        </Card>
    );
};

export default DonationCard;

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        overflow: 'hidden',
        paddingBottom:25, 
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    iconStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    labelContainer: {
        marginLeft:20,
        marginRight:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      progressBar: {
        width: 300,
        height: 20,
        borderRadius: 10,
      },
      statisticLabel: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
      },
      percentageLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
      },
});