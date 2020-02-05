import React, {useState, useEffect} from 'react';
import { Button, Image, View, YellowBox} from 'react-native';
import firebase from 'react-native-firebase';

import {GlobalStateProvider} from './src/hooks/useGlobalState';
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <GlobalStateProvider>
      <AppNavigator />
    </GlobalStateProvider>
  );
};

YellowBox.ignoreWarnings(['Require cycle:']);
export default App;
