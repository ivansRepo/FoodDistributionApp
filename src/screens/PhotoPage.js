import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {  useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { firebaseStorage } from "../firebaseConfig";
import { queryLogUser } from "../database/crud";

let userID = "7KXyvJYFCeauKbGQEynfMKFXHGS2";

const addPhotoToFirestore = async (userID,downloadURL) => {
    try {
      const docRef = await addDoc(collection(db, "Photo"), {
        userID: userID,
        photoName: downloadURL,
      });
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };

const PhotoPage = ({ route }) => {

  const navigation = useNavigation();

  const { photo } = route.params;
  const childPath = "images/";

  const uploadImage = async () => {
    // Upload file and metadata to the object 'images/file.name'
    const filename = photo.split('/').pop();
    const response = await fetch(photo);
    const blob = await response.blob();
    
    const storageRef = ref(firebaseStorage, childPath + filename);

    const metadata = {
      contentType: 'image/jpeg',
    };

    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          Toast.show({
            type: 'success',
            text1: 'Photo Uploaded!',
            text2: 'Your photo has been successfully uploaded.',
          });
          //addPhotoToFirestore(userID,downloadURL);
          navigation.navigate("CameraScreen");
        });
      }
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: photo }} style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={() => uploadImage()}>
          <FontAwesome name="check-circle" size={80} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default PhotoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
  },
});