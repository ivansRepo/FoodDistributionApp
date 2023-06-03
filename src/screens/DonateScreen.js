import React, { useState} from 'react';
import { ScrollView,View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Input,Slider } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
import moment from 'moment';
import HomeHeader from '../components/HomeHeader';
import AppButton from '../components/button';
import { colors } from '../global/styles';
import { AddGiveList } from '../database/create';

const DonateScreen = ({navigation}) => {

      //veg, non-veg
      const [selectedOption, setSelectedOption] = useState('vegetarian');

      const handleOptionChange = (value) => {
        setSelectedOption(value);
      };

      //date
      const [selectedDate, setSelectedDate] = useState('');
      const [isDatePickerVisible, setDatePickerVisible] = useState(false);

      const showDatePicker = () => {
        setDatePickerVisible(true);
      };

      const hideDatePicker = () => {
        setDatePickerVisible(false);
      };

      const handleConfirm = (date) => {
        setSelectedDate(moment(date).format('YYYY-MM-DD'));
        hideDatePicker();
      };

      //time
      const [selectedTime, setSelectedTime] = useState('');
      const [isTimePickerVisible, setTimePickerVisible] = useState(false);

      const showTimePicker = () => {
        setTimePickerVisible(true);
      };

      const hideTimePicker = () => {
        setTimePickerVisible(false);
      };

      const handleTimeConfirm = (time) => {
        setSelectedTime(moment(time).format('h:mm A'));
        hideTimePicker();
      };

      //slider
        const [mealCount, setMealCount] = useState(0);
      
        const handleSliderChange = (value) => {
          setMealCount(value);
        };
      
      //input
      const [foodName, setFoodName] = useState('');
      const [descriptionName, setdescriptionName] = useState('');
      const [location, setLocation] = useState('');
      const [password, setPassword] = useState('');
      const [isPasswordFocused, setIsPasswordFocused] = useState(false);

      //input focus
      const handleFoodDescriptionFocus = () => {
        setFoodDescriptionFocused(true);
      };

      const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
      };
    
      const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
      };

      function addToGivelistFunction() {
        // Implement your logic to add to Givelist
        console.log('Adding to Givelist...');
        AddGiveList(selectedDate,descriptionName,"foodDonor" ,foodName,location,mealCount,selectedTime,selectedOption)
      }
      
  
  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.container}>
        <HomeHeader navigation={navigation}/>
        <View style={styles.ImageContainer}>
            <View style ={{flex:6, justifyContent:"center", borderRadius: 20}}>    
              <View style={styles.slide1}>
                  <Image 
                      style={styles.imageSlide}
                      source ={ require('../../assets/food_pack1.jpeg')}
                  />
                  <Text style={styles.imageTextStyle}>Feed Homeless in Quatres Bornes</Text>
              </View>  
            </View>
        </View>

      {/* Donation Title*/}

      <View style={{marginLeft:20}}>
          <Text style={styles.donationTitle}>Donation Info</Text>
      </View>

      {/* veg_non-veg*/}
      <View style={{alignItems:'center'}}>
        <RadioButton.Group onValueChange={handleOptionChange} value={selectedOption}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.radioContainer}>
              <RadioButton.Item
                label="Veg"
                value={true}
                labelStyle={styles.radioButtonLabel}
                color="#fbb968"
                uncheckedColor="#757575"
              />
            </View>
            <View style={styles.radioContainer}>
              <RadioButton.Item
                label="Non-Veg"
                value={false}
                labelStyle={styles.radioButtonLabel}
                color="#fbb968"
                uncheckedColor="#757575"
              />
            </View>
          </View>
        </RadioButton.Group>
      </View>

      {/* Textinput*/}
      <View style={{marginTop: 40,marginHorizontal:40 }}>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Food Name'
            placeholder='Your food name'
            value={foodName}
            onChangeText={setFoodName}
            leftIcon={
              <Icon
                name='restaurant'
                type='material'
                color='#517fa4'
              />
            }
          />
        </View>

        <View style={{ marginBottom: 0 }}>
          <Input
            label='Food Description'
            placeholder='Your food description'
            value={descriptionName}
            onChangeText={setdescriptionName}
        
            leftIcon={
              <Icon
                name='description'
                type='material'
                color='#517fa4'
              />
            }
            multiline
            numberOfLines={4}
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16, minHeight:50 }}
            inputContainerStyle={{
              
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>
        
        {/**Slider Meal Amount*/}
        <View style={{marginVertical:10}}>
          <Text style={styles.label}>Number of Meals to Donate: {mealCount}</Text>
          <Slider
            value={mealCount}
            minimumValue={1}
            maximumValue={500}
            step={1}
            onValueChange={handleSliderChange}
            thumbStyle={styles.thumbStyle}
            trackStyle={styles.trackStyle}
            thumbTintColor='#517fa4'
            minimumTrackTintColor='#517fa4'
            maximumTrackTintColor='#d3d3d3'
          />
        </View>

        <View style={{ marginBottom: 0}}>

          <Input
            label='Location'
            placeholder='Your location'
            value={location}
            onChangeText={setLocation}
            secureTextEntry={true}
            leftIcon={
              <Icon
                name='location-on'
                type='material'
                color='#517fa4'
              />
            }
            multiline
            numberOfLines={4}
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16}}
            inputContainerStyle={{
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>
        
        <View style={styles.container}>
        <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
          <Input
            label='Date'
            placeholder='Select a date'
            value={selectedDate}
            leftIcon={
              <Icon
                name='event'
                type='material'
                color='#517fa4'
              />
            }
            containerStyle={styles.inputContainerStyle}
            inputStyle={styles.input}
            disabled={true}
          />
        </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

    <View>
      <TouchableOpacity onPress={showTimePicker} style={styles.inputContainer}>
        <Input
          label='Time'
          placeholder='Select a time'
          value={selectedTime}
          leftIcon={
            <Icon
              name='clock-o'
              type='font-awesome'
              color='#517fa4'
            />
          }
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.input}
          disabled={true}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
      </View>
      
      <View style={{marginTop:10, marginBottom:25, marginHorizontal:20}}>
        <AppButton text={"Add to GiveList"} onClick={addToGivelistFunction} />
      </View>

      </ScrollView>
      <View style={styles.floatingButton}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('GiveListScreen')
                }}
                >
                <Icon
                    name="hand-holding-heart"
                    type="font-awesome-5"
                    size={30}
                    color = {colors.buttons}
                />
                <Text style ={{color:colors.grey2}}>givelist</Text>
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

    ImageContainer:{
      flex:1,
      marginBottom:15,
      height:180,
      paddingHorizontal:30,
      marginTop:30,
    },
      
    slide1: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        textAlign:"center"
    },
    imageSlide: {
        resizeMode: 'cover',
        height: "100%",
        width: "100%",
        borderRadius:30,
        position:'absolute'
    },
    imageTextStyle: {  
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      marginTop:30,
      lineHeight:30,
      textAlign:"center"
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight:700

  },

  donationTitle:{
    fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
      marginHorizontal: 20,
      color:'#f3921d',
  },

  thumbStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#517fa4',
    borderRadius: 10,
  },
  trackStyle: {
    height: 5,
    borderRadius: 2.5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#83939f'
  },
  floatingButton: {
    position:"absolute",
    bottom:25,
    right:15,
    backgroundColor:"white",
    elevation:10,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:"center"
  }
  

  },
  
  );