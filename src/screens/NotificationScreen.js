import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, FlatList } from 'react-native';
import MyDonationListCard from '../components/MyDonationListCard';
import { foodData } from '../components/Data';
import Header from '../components/header';
import AppButton from '../components/button';
import { useState , useEffect} from 'react';
import { getDonation, queryForDocuments, queryForDocuments1, queryForDocuments2, queryForDonation } from '../database/crud';
import { AddDonationToFoodStore, AddDonationToFoodStore1, AddDonationToFoodStore2, AddGiveListToDonation1 } from '../database/create';

export default function NotificationScreen({ navigation }) {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await queryForDocuments1();
        setNotificationList(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log("My foodList : " + notificationList)
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Notification" type="arrow-left" navigation={navigation} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>My Notification</Text>
        </View>

        <View>
          <FlatList
            scrollEnabled={false}
            horizontal={false}
            data={notificationList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <MyDonationListCard foodName={item.foodName} location={item.location} quantity={item.quantity} />
              </View>
            )}
          />
        </View>   
      </ScrollView>
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