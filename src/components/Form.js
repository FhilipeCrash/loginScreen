import React from 'react';
import {View, Button, Alert, TextInput, StyleSheet} from 'react-native';

// Procurar um botão melhor pra adicionar depois

const Form = () => (
  <View>
    <TextInput style={styles.input} placeholder="Username or Email" />
    <TextInput style={styles.input} placeholder="Password" />
    <Button
      style={styles.button}
      title="Sign In"
      color="#743fcd"
      onPress={() => Alert.alert('Sing in')}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
  },
  button: {
    borderStyle: 'dotted',
    borderRadius: 40,
    width: 300,
  },
});

export default Form;
