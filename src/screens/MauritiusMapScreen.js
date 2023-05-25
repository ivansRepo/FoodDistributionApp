import React, { useState, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from "../components/header";

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

  const [selectedLocation, setSelectedLocation] = useState(null);
  const scrollViewRef = useRef(null);
  const mapViewRef = useRef(null);

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
    scrollToLocation(location.id);
    mapViewRef.current.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: initialRegion.latitudeDelta,
      longitudeDelta: initialRegion.longitudeDelta,
    });
  };

  const scrollToLocation = (locationId) => {
    const index = locations.findIndex((location) => location.id === locationId);
    if (scrollViewRef.current && index !== -1) {
      scrollViewRef.current.scrollTo({ x: index * ITEM_WIDTH, y: 0, animated: true });
    }
  };

  const ITEM_WIDTH = 120;

  return (
    <View style={styles.container}>
      <Header title="Donation Details" type="arrow-left" navigation={navigation} />
      <View style={styles.mapContainer}>
        <MapView ref={mapViewRef} style={styles.map} initialRegion={initialRegion} scrollEnabled={false} provider='google'>
          {locations.map((location) => (
            <Marker
              key={location.id}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={location.name}
              description="Donation Restaurant"
              onPress={() => handleMarkerPress(location)}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>{location.name}</Text>
                    <Text style={styles.description}>Donation Restaurant</Text>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          contentContainerStyle={styles.sliderContentContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations.map((location) => (
            <TouchableOpacity
              key={location.id}
              style={[
                styles.sliderItem,
                location.id === selectedLocation?.id && styles.selectedSliderItem,
              ]}
              onPress={() => handleMarkerPress(location)}
            >
              <Image style={styles.sliderItemImage} source={location.image} />
              <Text style={styles.sliderItemText}>{location.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
  sliderContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  sliderContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sliderItem: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  selectedSliderItem: {
    backgroundColor: '#007aff',
  },
  sliderItemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  sliderItemText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
  },
});