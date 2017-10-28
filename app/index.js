import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $border: '#CECECE',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
});

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
