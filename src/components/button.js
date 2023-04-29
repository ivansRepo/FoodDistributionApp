import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import _default from 'react-native-elements/dist/linearProgress';
import { parameters } from '../global/styles';

const AppButton = ({text,onClick})=>{

  return (
    <View style={styles.container}>
      <TouchableOpacity style={parameters.styleButton} onPress={onClick}>
        <Text style={parameters.buttonTitle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10
  },
  /*
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    height: 40
  }
  */
});