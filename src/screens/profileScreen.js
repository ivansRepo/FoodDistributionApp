import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import Header from '../components/header';
import { ScrollView } from 'react-native';
import { queryDonor, updateDonor } from '../database/crud';
import { currentUserID } from '../database/create';

let actualuserID = '';

export const userID = (id) => {
  actualuserID = id;
  return actualuserID;
}

const ProfileScreen = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [isJobTitleFocused, setIsJobTitleFocused] = useState(false);
  const [location, setLocation] = useState('');
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [phone, setPhone] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);

  const [donorList, setdonorList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await  queryDonor(actualuserID);
        setdonorList(value);
        setFirstName(value.firstName);
        setEmail(value.email);
        setLastName(value.lastName);
        setLocation(value.location);
        setJobTitle(value.organisation);
        setPhone(value.phone);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
    //firstName = donorList.firstName;
    
  }, []);
  console.log("donor is: " +  JSON.stringify(donorList,null,2))
  console.log("firstName : " + donorList)
  console.log("My donorList : " + donorList.firstName,"wwwwww")

  // photo upload
  const handlePhotoUpload = () => {
    // Implement your logic to handle photo upload here
    console.log('Photo upload...');
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePhoneFocus = () => {
    setIsPhoneFocused(true);
  };

  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
  };

  const handleJobTitleFocus = () => {
    setIsJobTitleFocused(true);
  };

  const handleJobTitleBlur = () => {
    setIsJobTitleFocused(false);
  };

  const handleLocationFocus = () => {
    setIsLocationFocused(true);
  };

  const handleLocationBlur = () => {
    setIsLocationFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleEditProfile = () => {
    if (showSaveButton == false){
      setShowSaveButton(true);
    }
    else{
      setShowSaveButton(false);
    }
  };

  const handleSaveChanges = () => {
      console.log(email,firstName,lastName,location,jobTitle,phone,actualuserID)
      updateDonor(email,firstName,lastName,location,jobTitle,phone,actualuserID)
    setShowSaveButton(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="My Profile" type="arrow-left" navigation={navigation} />
      <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
        <TouchableOpacity onPress={handleEditProfile}>
          <Image
            style={{ height: 60, width: 60, alignItems: "center", justifyContent: "center", marginLeft: 15 }}
            source={require('../../assets/account.png')}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bob Marley</Text>
        </View>
        <Icon
            name="pencil"
            type="font-awesome"
            color="#517fa4"
            size={20}
            containerStyle={styles.editIcon}
            onPress={handleEditProfile}
          />
      </View>
      <View style={{}}>
          <TouchableOpacity onPress={handlePhotoUpload} style={styles.photoButton}>
            <Icon name="camera" type="font-awesome" color="#517fa4" size={15} />
            <Text style={{fontSize:10,marginLeft:5,color:'gray'}}>Change pic</Text>
          </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 40, marginTop:20,marginBottom:20  }}>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='FirstName'
            placeholder='Your firstname'
            value={firstName}
            onChangeText={setFirstName}
            leftIcon={
              <Icon
                name='user'
                type='font-awesome'
                color='#517fa4'
              />
            }
          />
        </View>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='LastName'
            placeholder='Your lastname'
            value={lastName}
            onChangeText={setLastName}
            leftIcon={
              <Icon
                name='user'
                type='font-awesome'
                color='#517fa4'
              />
            }
          />
        </View>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Email'
            placeholder='Your email'
            value={email}
            onChangeText={setEmail}
            leftIcon={
              <Icon
                name='envelope'
                type='font-awesome'
                color='#517fa4'
              />
            }
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: isEmailFocused ? 2 : 1,
              borderBottomColor: isEmailFocused ? '#4a4a4a' : '#e0e0e0',
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>
        {/*<View style={{ marginBottom: 0 }}>
          <Input
            label='Password'
            placeholder='Your password'
            value={password}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            secureTextEntry={true}
            leftIcon={
              <Icon
                name='lock'
                type='font-awesome'
                color='#517fa4'
              />
            }
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: isPasswordFocused ? 2 : 1,
              borderBottomColor: isPasswordFocused ? '#4a4a4a' : '#e0e0e0',
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>*/}
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Phone'
            placeholder='Your phone number'
            value={phone}
            onChangeText={setPhone}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            leftIcon={
              <Icon
                name='phone'
                type='font-awesome'
                color='#517fa4'
              />
            }
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: isPhoneFocused ? 2 : 1,
              borderBottomColor: isPhoneFocused ? '#4a4a4a' : '#e0e0e0',
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Job Title'
            placeholder='Your job title'
            value={jobTitle}
            onChangeText={setJobTitle}
            onFocus={handleJobTitleFocus}
            onBlur={handleJobTitleBlur}
            leftIcon={
              <Icon
                name='briefcase'
                type='font-awesome'
                color='#517fa4'
              />
            }
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: isJobTitleFocused ? 2 : 1,
              borderBottomColor: isJobTitleFocused ? '#4a4a4a' : '#e0e0e0',
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
            editable={false}
          />
        </View>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Address'
            placeholder='Your Address'
            value={location}
            onChangeText={setLocation}
            onFocus={handleLocationFocus}
            onBlur={handleLocationBlur}
            leftIcon={
              <Icon
                name='map-marker'
                type='font-awesome'
                color='#517fa4'
              />
            }
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ borderWidth: 0, fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: isLocationFocused ? 2 : 1,
              borderBottomColor: isLocationFocused ? '#4a4a4a' : '#e0e0e0',
              marginHorizontal: 10,
              paddingHorizontal: 0
            }}
          />
        </View>
        
        {showSaveButton && (
          <Button title='Save Changes' style={styles.buttonSave} onPress={handleSaveChanges} />
        )}
        
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBotom:10
  },
  textContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonSave:{
    marginBottom: 20
  },
  editIcon: {
    backgroundColor: 'transparent',
    justifyContent: 'center',

  },
  photoButton: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 60
  },
});