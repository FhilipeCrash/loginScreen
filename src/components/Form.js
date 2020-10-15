import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Form = () => (
  <View>
    <Text style={styles.placeholder}>Username or Email</Text>
    <TextInput placeholderTextColor="#000" style={styles.input} />
    <Text style={styles.placeholder}>Password</Text>
    <TextInput style={styles.input} secureTextEntry={true} />
  </View>
)

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    textAlign: 'left',
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(2),
    marginBottom: 30,
    fontFamily: 'DMSans-Bold',
    fontSize: responsiveFontSize(2),
    paddingLeft: responsiveWidth(2),
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
