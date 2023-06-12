import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {  useNavigation, useIsFocused } from '@react-navigation/native';
import Header from '../components/header';

const CameraScreen = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (camera)
 {
      const options = { quality: 1, base64: true, exif: false };
      const photo = await camera.takePictureAsync(options);
      setImage(photo.uri);

      navigation.navigate('PhotoPage', { photo: photo.uri });
      // Handle the captured photo here (e.g., save it to storage, upload, etc.)
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });

    if (!result.canceled) {
      // Handle the selected image here
      console.log(result.assets[0].uri);
      navigation.navigate('Image', { photo: result.assets[0].uri });
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Header title="Camera" type="arrow-left" navigation={navigation} />
      <View style={styles.cameraContainer}>
        {isFocused && <Camera style={styles.camera} type={type} ratio={'1:1'} ref={ref => setCamera(ref)} />}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <FontAwesome name="image" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.captureButton} onPress={() => takePhoto()}>
          <FontAwesome name="circle" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => flipCamera()}>
          <FontAwesome name="camera" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  captureButton: {
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 40,
    padding: 16,
    marginHorizontal: 32,
  },
});