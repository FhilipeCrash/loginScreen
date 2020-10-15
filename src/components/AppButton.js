import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = () => (
  <View style={{marginTop: 150}}>
    <TouchableOpacity onPress={() => Alert.alert('Login')}>
      <LinearGradient
        colors={['#884BCB', '#7A43CB', '#713ECD']}
        style={styles.button}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: responsiveFontSize(1.5),
          }}>
          SIGN IN
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#743fcd',
    borderRadius: 40,
    width: responsiveWidth(85),
    height: responsiveHeight(5),
    paddingTop: 10,
    marginLeft: responsiveWidth(2),
  },
});

export default AppButton;
