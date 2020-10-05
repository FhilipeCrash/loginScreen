import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Welcome = () => (
  <View>
    <Text style={styles.title}>Let's Sign You In</Text>
    <Text style={styles.subTitle}>Welcome back, you've been missed!</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'DMSans-Bold',
    marginLeft: 10,
    marginBottom: 15,
  },
  subTitle: {
    color: '#59595b',
    fontSize: 17,
    fontFamily: 'DMSans-Regular',
    marginLeft: 10,
    marginBottom: 60,
  },
});

export default Welcome;
