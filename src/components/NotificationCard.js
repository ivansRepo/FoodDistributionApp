import { Text, StyleSheet, View, Image} from 'react-native';
import { Card} from 'react-native-paper';

const NotificationCard = ({title,notif}) => {

    return(
        <Card style = { styles.card }>
            <View style={{flexDirection: "row"}}>
                <View style={styles.foodInformation}>
                    <Text style={{fontWeight: 'bold',fontSize: 18,marginBottom: 6}}>{title}</Text>
                    <Text style={{fontWeight: 300,fontSize: 13,color:"gray",marginBottom: 4}}>{notif}</Text>
                </View>                
            </View>
        </Card>
    );
};

export default NotificationCard;

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
    foodInformation: {
        margin: 10,
        marginLeft:20
    }
});