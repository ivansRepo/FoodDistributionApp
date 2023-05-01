import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Card,IconButton, ProgressBar } from 'react-native-paper';
import AppButton from './button';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';


const MyDonationListCard = () => {

    return(
        <Card style = { styles.card }>
            <View style={{flexDirection: "row"}}>
                <View style={styles.imageContainer}>
                    <Image source ={ require("../../assets/food_truck2.jpeg")} style = { styles.image } />
                </View>
                <View style={styles.foodInformation}>
                    <Text style={{fontWeight: 'bold',fontSize: 18,marginBottom: 6}}>FoodTitle</Text>
                    <Text style={{fontWeight: 300,fontSize: 13,color:"gray",marginBottom: 4}}>FoodLocation</Text>
                    <Text style={{fontWeight: 300,fontSize: 13,color:"gray",marginBottom: 4}}>Quantity</Text>
                    <Text style={{fontWeight: 300,fontSize: 13,color:"gray"}}>Date</Text>
                </View>                
            </View>
        </Card>
    );
};

export default MyDonationListCard;

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        overflow: 'hidden',
        shadowOffset: {
        width: 0,      
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    imageContainer: {
        height: 120,
        width: 120,
        borderRadius: 10
    },
    image: {
        padding:0,
        backgroundColor: '#000',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: "100%",
        resizeMode: 'cover',
        height: "100%", 
        borderRadius: 10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    foodInformation: {
        margin: 10,
        marginLeft:20
    }
});