import React from 'react';
import Navigators from './src/Public/Navigators/Main';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/Public/Redux/store';
// console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
