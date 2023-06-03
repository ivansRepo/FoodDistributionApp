import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, FlatList } from 'react-native';
import MyDonationListCard from '../components/MyDonationListCard';
import { foodData } from '../components/Data';
import Header from '../components/header';
import AppButton from '../components/button';

export default function GiveListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="SansFaim" type="arrow-left" navigation={navigation} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>My GiveList</Text>
          <Text style={styles.description}>With just your food excess, you can share a meal with someone in need</Text>
        </View>

        <View>
          <FlatList
            scrollEnabled={false}
            horizontal={false}
            data={foodData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <MyDonationListCard foodName={item.foodName} location={item.location} quantity={item.meals} />
              </View>
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.donateSection}>
        <View style={{justifyContent: "space-between", flexDirection:"row",marginHorizontal:10}}> 
            <Text style={styles.totalDonationText}>Total Meals:</Text>
            <Text style={styles.totalDonationText}>8</Text>
        </View>
        <View style={{width:'100%', marginBottom: 30, marginTop: 20}}>
            <AppButton text="Donate"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
    fontStyle: 'italic',
  },
  donateSection: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  totalDonationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});