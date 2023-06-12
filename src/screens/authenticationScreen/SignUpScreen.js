import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { Icon, SocialIcon } from "react-native-elements";
import Header from "../../components/header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { AddFoodDonor } from "../../database/create";

export default function SignUpScreen({ navigation }) {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");

  // Helper function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Helper function to validate phone number format
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  // Helper function to validate password format
  const validatePassword = (password) => {
    // Password must contain at least 8 characters, including at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  // SIGN UP FIREBASE
  const createUser = () => {
    // Validate empty fields
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      phone === "" ||
      jobTitle === "" ||
      address === ""
    ) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email format");
      return;
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      Alert.alert("Error", "Invalid phone number format");
      return;
    }

    // Validate password format
    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must contain at least 8 characters, including at least one letter and one number"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Create user
        const user = userCredential.user;
        const user_id = user.uid;
        AddFoodDonor(email,firstName,lastName,address,jobTitle,phone)
        console.log("User created");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setJobTitle("");
        setAddress("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      
  };

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
      <View>
        <Text style={title}>Sign Up</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <Icon
            name="user"
            type="font-awesome"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="FirstName"
            value={firstName}
            onChangeText={(firstName) => setName(firstName)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="user"
            type="font-awesome"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="LastName"
            value={firstName}
            onChangeText={(lastName) => setName(lastName)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="email"
            type="material"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="lock"
            type="material"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="phone"
            type="material"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="Phone"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="work"
            type="material"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="Job Title"
            value={jobTitle}
            onChangeText={(jobTitle) => setJobTitle(jobTitle)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
        <View>
          <Icon
            name="location-on"
            type="material"
            color="#86939e"
            containerStyle={styles.iconContainer}
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="Address"
            value={address}
            onChangeText={(address) => setAddress(address)}
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <AppButton text="Create Account" onClick={createUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingLeft: 45,
    height: 40,
  },
  iconContainer: {
    position: "absolute",
    left: 25,
    top: 9,
    zIndex: 1,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
});