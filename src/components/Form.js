import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Password from './../../assets/icons/padlock.svg';
import User from './../../assets/icons/user2.svg';

const Form = () => (
  <View>
    <Text style={styles.placeholder}>Username or Email</Text>
    <View style={styles.inputFull}>
      <User style={styles.icon} height={64} width={40} fill={"#000"}/>
      <TextInput placeholderTextColor="#000" style={styles.input} />
    </View>
    <Text style={styles.placeholder}>Password</Text>
    <View style={styles.inputFull}>
      <Password style={styles.icon} height={64} width={40} fill={"#000"}/>
      <TextInput style={styles.input} secureTextEntry={true} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  inputFull: {
    flexDirection: 'row',
    flex: 0,
  },
  input: {
    backgroundColor: '#fff',
    textAlign: 'left',
    width: responsiveWidth(77.2),
    height: responsiveHeight(7),
    marginBottom: 30,
    fontFamily: 'DMSans-Bold',
    fontSize: responsiveFontSize(2),
    paddingLeft: responsiveWidth(2),
  },
  icon: {
    backgroundColor: '#fff',
    marginLeft: responsiveWidth(2),
    height: responsiveHeight(7),
    paddingTop: 50,
  },
  placeholder: {
    backgroundColor: '#fff',
    color: '#929292',
    textAlign: 'left',
    width: responsiveWidth(85),
    marginLeft: responsiveWidth(2),
    fontFamily: 'DMSans-Regular',
    fontSize: responsiveFontSize(1.3),
  },
});

export default Form;
