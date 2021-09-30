import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store'
import AppNavigator from './navigation/AppNavigator';



export default App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

