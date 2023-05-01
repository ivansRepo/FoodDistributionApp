import React, { useState } from 'react';
import { View, TouchableOpacity,Image,StyleSheet,Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import Header from '../components/header';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
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

  return (
    <View>
      <Header title = "My Profile" type ="arrow-left" navigation={navigation} />
      <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
        <TouchableOpacity>
                      <Image 
                          style={{height:60, width:60, alignItems:"center", justifyContent:"center",marginLeft:15}}
                          source ={require('../../assets/account.png')}
                          />
        </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bob Marley</Text>
      </View>
      </View> 
      <View style={{margin: 40 }}>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Name'
            placeholder='Your name'
            value={name}
            onChangeText={setName}
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
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
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
        <View style={{ marginBottom: 0 }}>
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
        </View>
        <View style={{ marginBottom: 0 }}>
          <Input
            label='Phone'
            placeholder='Your phone number'
            value={phone}
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
            label='Location'
            placeholder='Your location'
            value={location}
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
        <Button title='Save Changes' />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  textContainer: {
      paddingTop: 20,
      marginHorizontal: 20,
      marginBottom:20,
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  })