import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

// Procurar um botão melhor pra adicionar depois

const Form = () => (
  <View>
    <TextInput style={styles.input} placeholder="Username or Email" />
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="Password"
    />
    {/* <TouchableOpacity style={styles.button}>
      <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>SIGN IN</Text>
    </TouchableOpacity> */}
    <LinearGradient
      colors={['#884BCB', '#7A43CB', '#713ECD']}
      style={styles.button}>
      <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
        SIGN IN
      </Text>
    </LinearGradient>
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
  button: {
    backgroundColor: '#743fcd',
    borderRadius: 40,
    width: responsiveWidth(85),
    height: responsiveHeight(5),
    paddingTop: 10,
    marginLeft: responsiveWidth(2),
    marginTop: 150,
  },
});

export default Form;
