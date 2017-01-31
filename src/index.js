import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';

import 'rxjs';

import configureStore from './store';
import HomePage from './containers/HomePage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
