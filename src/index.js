import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Welcome from './components/Welcome';
import Form from './components/Form';
import AppButton from './components/AppButton';
import './config/StatusBarConfig';

const App = () => (
  <View
    style={{
      backgroundColor: '#dfdfdf',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: responsiveWidth(5),
    }}>
    <Welcome />
    <Form />
    <AppButton />
  </View>
);

export default App;
