import React from 'react';
import {View} from 'react-native';

import Welcome from './components/Welcome';
import Form from './components/Form';

const App = () => (
  <View style={{backgroundColor: '#dfdfdf'}}>
    <Welcome />
    <Form />
  </View>
);

export default App;
