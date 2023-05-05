import { Text, StyleSheet, View, Image} from 'react-native';
import { Card } from 'react-native-paper';



const StatisticCard = ({navigation}) => {

    return(
        <Card onPress={()=>{navigation.navigate("StatisticScreen")}} style = { styles.card }>
            <View style={{height:250}}>
                <Image source ={ require("../../assets/mauritius.jpg")} style = { styles.image } />
            </View>        
            <View style={styles.labelContainer}>
                <View style={{flexDirection:"row", width:"100%",justifyContent:'space-between',marginBottom:10}}>
                    <Text style={styles.textLabel}>meals offered:</Text>
                    <Text style={styles.statsLabel}> + 334,187</Text>
                </View>
                <View style={{flexDirection:"row", width:"100%",justifyContent:'space-between',}}>
                    <Text style={styles.textLabel}>supporters:</Text>
                    <Text style={styles.statsLabel}>+ 17, 418</Text>
                </View>
            </View>                        
        </Card>
    );
};

export default StatisticCard;

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        overflow: 'hidden',
        paddingBottom:20, 
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
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        flexDirection:"column"
      },
      textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      statsLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
      },

});