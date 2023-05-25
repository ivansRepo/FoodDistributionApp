import React, {useState} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet,Text, View, Image,FlatList, TouchableOpacity } from 'react-native';
import Header from "../components/header";
import Geolocation from '@react-native-community/geolocation';
import { ScrollView } from 'react-native-gesture-handler';

export default function MauritiusMapScreen({ navigation }) {
    const initialRegion = {
      latitude: -20.2759,
      longitude: 57.5713,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    };
  
    const locations = [
      { id: 0, name: 'Vacoas', latitude: -20.2986, longitude: 57.4783, image: require('../../assets/food_donation.jpeg') },
      { id: 1, name: 'Quatre-Bornes', latitude: -20.2646, longitude: 57.4818, image: require('../../assets/food_donation.jpeg') },
      { id: 2, name: 'Rose-Hill', latitude: -20.2410, longitude: 57.4724, image: require('../../assets/food_donation.jpeg') },
      { id: 3, name: 'Port Louis', latitude: -20.1653, longitude: 57.4984, image: require('../../assets/food_donation.jpeg') },
      { id: 4, name: 'Curepipe', latitude: -20.3189, longitude: 57.5200, image: require('../../assets/food_donation.jpeg') },
    ];
  
    const [selectedMarker, setSelectedMarker] = useState(null);
  
    const handleMarkerPress = (marker) => {
      setSelectedMarker(marker);
    };

    return (
      <View style={{ flex: 1 }}>
        <Header title="Donation Details" type="arrow-left" navigation={navigation} />
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={initialRegion}>
            {locations.map((location, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title={location.name}
                description="Donation Restaurant"
              >
                <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.name}>{location.name}</Text>
                      <Text style={styles.description}>Donation Restaurant</Text>
                      {/* <Image 
                        style={styles.image}
                        source={require('../../assets/food_truck2.jpeg')}
                      /> */}
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
        <View style={{flex:1}}>

        <View style={styles.sliderContainer}>
            <FlatList
            data={locations}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(<TouchableOpacity
                style={styles.sliderItem}
                onPress={() => handleMarkerPress(item)}
                >
                <Image style={styles.sliderItemImage} source={item.image} />
                <Text style={styles.sliderItemText}>{item.name}</Text>
                </TouchableOpacity>)}

            />
        </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 4,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    // Callout bubble
    bubble: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      width: 200,
    },
    // Arrow below the bubble
    arrow: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#fff',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -32,
    },
    arrowBorder: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#007a87',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -0.5,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#888',
    },
    image: {
      width: 180,
      height: 120,
      borderRadius: 6,
      marginTop: 5,
    },
    sliderContainer: {
      backgroundColor: 'fff',
      paddingHorizontal: 10,
    },
    sliderItem: {
      width: 120,
      height: 130,
      marginRight: 10,
      borderRadius: 8,
      overflow: 'hidden',
    },
    sliderItemImage: {
      width: '100%',
      height: '80%',
      resizeMode: 'cover',
    },
    sliderItemText: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });