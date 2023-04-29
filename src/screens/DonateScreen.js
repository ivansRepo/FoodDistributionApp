import React, { useState,useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from "react-native-animatable"
import Swiper from "react-native-swiper";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DonateScreen = () => {
  const [foodType, setFoodType] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [location, setLocation] = useState('');
  
  const[textInput1Focussed, setTextInput1Focussed] = useState(false)
  const[textInput2Focussed, setTextInput2Focussed] = useState(false)
  const[textInput3Focussed, setTextInput3Focussed] = useState(false)
  const[textInput5Focussed, setTextInput5Focussed] = useState(false)
  const[textInput6Focussed, setTextInput6Focussed] = useState(false)
  const[textInput7Focussed, setTextInput7Focussed] = useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    const textInput3 = useRef(3)
    const textInput5 = useRef(5)
    const textInput6 = useRef(6)
    const textInput7 = useRef(7)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleConfirm = (date) => {
        hideDatePicker();
        setPickupTime(date.toLocaleString());
      };
  
  return (
    <View style={styles.container}>

        <View style={{flex:1, marginBottom:15}}>
            <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>
                <Swiper autoplay ={true}>
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_pack1.jpeg')}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_pack1.jpeg')}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_donation5.jpeg')}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            style={styles.imageSlide}
                            source ={ require('../../assets/food_truck2.jpeg')}
                        />
                    </View>
                </Swiper>
            </View>
        </View>

      <View style={styles.inputContainer}>
      <Animatable.View animation ={textInput1Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='food' type='material-community' size={20} color='orange' style={{marginRight:10}} />
        </Animatable.View>
        <TextInput
          style={styles.input}
          placeholder='Food type'
          placeholderTextColor='gray'
          value={foodType}
          ref ={textInput1}
                        onFocus ={()=>{
                            setTextInput1Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput1Focussed(true)
                        }}
          //onChangeText={(text) => setFoodType(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Animatable.View animation ={textInput2Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='food-variant' type='material-community' size={20} color='orange' style={{marginRight:10}} />
        </Animatable.View>
        <TextInput
          style={styles.input}
          placeholder='Food name'
          placeholderTextColor='gray'
          value={foodName}
          ref ={textInput2}
                        onFocus ={()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput2Focussed(true)
                        }}
          //onChangeText={(text) => setFoodName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Animatable.View animation ={textInput3Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='note-text-outline' type='material-community' size={20} color='orange' style={{marginRight:10}} />
        </Animatable.View>
        <TextInput
          style={styles.input}
          placeholder='Food description'
          placeholderTextColor='gray'
          value={foodDescription}
          ref ={textInput3}
                        onFocus ={()=>{
                            setTextInput3Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput3Focussed(true)
                        }}
          onChangeText={(text) => setFoodDescription(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Animatable.View animation ={textInput5Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='weight' type='material-community' size={20} color='orange' style={{marginRight:10}}/>
        </Animatable.View>
        <TextInput
          style={styles.input}
          placeholder='Quantity'
          placeholderTextColor='gray'
          value={foodQuantity}
          ref ={textInput5}
                        onFocus ={()=>{
                            setTextInput5Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput5Focussed(true)
                        }}
          //onChangeText={(text) => setFoodQuantity(text)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputContainer}>

      <Animatable.View animation ={textInput6Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='clock-time-four-outline' type='material-community' size={20} color='orange' style={{marginRight:10}} />
        </Animatable.View>
        
        <TextInput
          style={styles.input}
          placeholder='Pick-up time'
          placeholderTextColor='gray'
          value={pickupTime}
          ref ={textInput6}
                        onFocus ={()=>{
                            setTextInput6Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput6Focussed(true)
                        }}
          //onChangeText={(text) => setPickupTime(text)}
        />
        <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
        <Icon name='calendar-clock' type='material-community' color='#FFA500' />
        <Text style={styles.label}>Pickup Time: {pickupTime ? pickupTime : 'Not selected'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='datetime'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
      <View style={styles.inputContainer}>
      <Animatable.View animation ={textInput7Focussed?"":"fadeInRight"} duration={400}>
        <Icon name='navigation' type='material-community' size={20} color='orange' style={{marginRight:10}}/>
        </Animatable.View>
        <TextInput
          style={styles.input}
          placeholder='Location'
          placeholderTextColor='gray'
          value={location}
          ref ={textInput7}
                        onFocus ={()=>{
                            setTextInput7Focussed(false)
                        }}
                        onBlur ={()=>{
                            setTextInput7Focussed(true)
                        }}
          //onChangeText={(text) => setLocation(text)}
        />
      </View>
      <Text style={styles.imageText}>Add up to 10 pictures of the food</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.imageBox}>
          <Icon name='camera' type='material-community' size={30} color='orange' />
          <Text style={styles.imageBoxText}>Add photo</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

export default DonateScreen;
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
      marginHorizontal: 20,
    },
    formContainer: {
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginVertical: 10,
      borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        marginBottom:20,
        borderRadius:12,
        paddingLeft:15,
        height: 40
    },
    inputIcon: {
      marginHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 40,
      color: '#000',
    },
    textareaContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 5,
      marginVertical: 10,
    },
    textarea: {
      height: 100,
      textAlignVertical: 'top',
      color: '#000',
    },
    imageContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginVertical: 10,
    },
    locationIcon: {
      marginHorizontal: 10,
    },
    locationText: {
      flex: 1,
      height: 40,
      color: '#000',
    },

    slide1: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    slide2: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    slide3: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9DD6EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    imageSlide: {
        resizeMode: 'cover',
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
  });