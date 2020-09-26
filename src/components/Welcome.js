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
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#59595b',
    fontSize: 17,
  },
});

export default Welcome;
