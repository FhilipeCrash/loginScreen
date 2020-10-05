import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Welcome = () => (
  <View>
    <Text style={styles.title}>Let's Sign You In</Text>
    <Text style={styles.subTitle}>Welcome back, you've been missed!</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: responsiveFontSize(3.5),
    textAlign: 'left',
    fontFamily: 'DMSans-Bold',
    marginLeft: responsiveWidth(2),
    marginBottom: 15,
  },
  subTitle: {
    color: '#59595b',
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'DMSans-Regular',
    marginLeft: responsiveWidth(2),
    marginBottom: 70,
  },
});

export default Welcome;
