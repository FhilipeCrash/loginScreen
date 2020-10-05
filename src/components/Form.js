import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Form = () => (
  <View>
    <TextInput style={styles.input} placeholder="Username or Email" />
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="Password"
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(2),
    marginBottom: 30,
  },
});

export default Form;
