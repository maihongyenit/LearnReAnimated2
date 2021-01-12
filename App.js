import React from 'react';
import Screen from './Screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default () => (
  <SafeAreaProvider>
    <Screen />
  </SafeAreaProvider>
);
