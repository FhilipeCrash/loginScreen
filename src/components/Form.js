import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

// Procurar um botão melhor pra adicionar depois

const Form = () => (
  <View>
    <TextInput style={styles.input} placeholder="Username or Email" />
    <TextInput style={styles.input} placeholder="Password" />
    {/* <Button
      style={styles.button}
      title="Sign In"
      color="#743fcd"
      onPress={() => Alert.alert('Sing in')}
    /> */}
    <TouchableOpacity style={styles.button}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign In</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: 400,
    height: 40,
    margin: 20,
  },
  button: {
    backgroundColor: '#743fcd',
    borderRadius: 40,
    width: 400,
    height: 40,
    paddingLeft: 180,
    paddingTop: 10,
    marginLeft: 20,
  },
});

export default Form;
