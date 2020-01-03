import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import FlashMessage from 'react-native-flash-message';
import { Provider as StoreProvider } from 'react-redux';
import {store} from './src/store'
const Main = () => (
  <Provider theme={theme}>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
    <FlashMessage position="top" />
  </Provider>
);

export default Main;
