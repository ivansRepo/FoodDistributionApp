import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors, parameters } from "../global/styles";

export default function HomeHeader({ title, type, navigation }) {
  const [hasNotification, setHasNotification] = useState(false);

  return (
    <View style={styles.header}>
      <View style={{ align: "center", justifyContent: "center", marginLeft: 0, flex: 1 }}>
        <Icon type="material-community"
          name="menu"
          color={colors.headerText}
          size={28}
          onPress={() => { navigation.goBack() }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.headerText}>SansFaim</Text>
      </View>
      <View style={{ align: "center", justifyContent: "center", marginLeft: 5, flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
          <Icon type="material-community"
            name="bell"
            color={colors.headerText}
            size={28}
            onPress={() => {
              navigation.navigate("NotificationScreen");
              setHasNotification(false); // Reset the notification indicator when bell icon is pressed
            }}
          />
          {hasNotification && <Text style={styles.notificationIndicator}>!</Text>}
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={styles.inputContainer}>
            <Image
              style={{ height: 32, width: 32, alignItems: "center", justifyContent: "center", marginLeft: 5, marginRight: 20 }}
              source={require('../../assets/account.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    flexDirection: "row",
    color: colors.headerText,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    alignContent: "center",
    justifyContent: "center",
    flex: 3
  },
  notificationIndicator: {
    color: "red", // Define a color for the indicator
    fontSize: 20,
    fontWeight: "bold",
    
  }
});