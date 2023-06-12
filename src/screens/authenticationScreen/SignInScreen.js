import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { Icon, SocialIcon } from "react-native-elements";
import Header from "../../components/header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { logUser } from "../../database/crud";
import { currentUserID } from "../../database/create";
import { userID } from "../profileScreen";

export default function SignInScreen({ navigation }) {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // SIGN IN FIREBASE
  const loginUser = () => {
    logUser(true, "user_id");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const user_id = user.uid; // userID
        console.log("The user id is: " + user.uid);
        currentUserID(user_id);
        userID(user_id);
        logUser(true, user_id);

        console.log("Login successful");
        navigation.navigate("RootDonorTabs");
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Error', 'User not found with the provided credential');
        } else if (error.code === 'invalid email' || error.code === 'wrong password') {
          Alert.alert('Error', 'Invalid email or password');
        } else {
          Alert.alert('Error', 'An error occurred');
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
      
      <View style={{justifyContent: "center"}}>
        <View>
            <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={styles.text1}>Please enter your email and password</Text>
            <Text style={styles.text1}>to sign in to your account</Text>
        </View>
        <View style={{ marginTop: 20 }}>
            <View>
            <TextInput
                style={styles.TextInput1}
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                ref={textInput1}
                onFocus={() => {
                setTextInput2Focussed(false);
                }}
                onBlur={() => {
                setTextInput2Focussed(true);
                }}
            />
            </View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focussed ? "" : "fadeInRight"} duration={400}>
                <Icon
                name="lock"
                iconStyle={{ color: colors.grey3 }}
                type="material"
                />
            </Animatable.View>
            <TextInput
                style={{ width: "80%" }}
                placeholder="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                ref={textInput2}
                onFocus={() => {
                setTextInput2Focussed(false);
                }}
                onBlur={() => {
                setTextInput2Focussed(true);
                }}
                secureTextEntry={true}
            />
            <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                <Icon
                name="visibility-off"
                iconStyle={{ color: colors.grey3 }}
                type="material"
                style={{ marginRight: 10 }}
                />
            </Animatable.View>
            </View>
        </View>

        <View style={{ marginTop: 40 }}>
            <AppButton text="Sign In" onClick={loginUser} />
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // Replace with your desired background color
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white, // Replace with your desired background color
    opacity: 0.5, // Adjust the opacity as desired
  },
  title: {
    ...title,
    color: colors.black, // Adjust the text color to be visible on the background color
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
    color: colors.black, // Adjust the text color to be visible on the background color
    textAlign: "center",
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingLeft: 15,
    height: 40,
    color: colors.black, // Adjust the text color to be visible on the background color
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 40,
    color: colors.black, // Adjust the text color to be visible on the background color
  },
});