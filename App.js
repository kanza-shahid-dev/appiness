import React from 'react';


import StackNavigation from './src/navigations/StackNavigation';
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux';
import store from './src/store/store';


const App = () => {
 

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
