import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Card,IconButton, ProgressBar } from 'react-native-paper';
import AppButton from './button';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';


const JoinUsCard = () => {

    const progress = 0.6; // This is the progress value between 0 and 1

    return(
        <Card style = { styles.card }>
            <View style={{height:300}}>
                <Image source ={ require("../../assets/food_truck2.jpeg")} style = { styles.image } />
            </View>        
            <View style={styles.cardContent}>
                <Text style={styles.imageTextStyle}>Join SansFaim and deliver a meal to the homeless</Text>
                <TouchableOpacity style={styles.styleButton} onPress={()=>{}}>
                    <Text style={styles.buttonTitle}>Join Us</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

export default JoinUsCard;

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
    styleButton:{
        backgroundColor:"#ff8c52",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        paddingHorizontal:20,
        width:"30%",
        alignItems: 'center',
        padding: 10,
        height: 40,
        justifyContent:"center",
        
    },
    buttonTitle:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        
    },
    cardContent:{
        position: 'absolute',
        bottom: 125,
        left: 0,
        right: 0,   
        marginHorizontal:30,
    }
});