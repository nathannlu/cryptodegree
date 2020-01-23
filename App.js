import React, {useState, useEffect} from 'react';
import {Text, Button, Image, View, YellowBox, Platform} from 'react-native';
import firebase from 'react-native-firebase';
import * as RNIap from 'react-native-iap';

import AppNavigator from "./src/navigation/AppNavigator";
import Level from './src/scenes/Level';

const items = Platform.select({
  ios: ['com.example.productId'],
  android: ['com.example.productId'],
});

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const result = await RNIap.initConnection();
        console.log('result', result);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    })();
  });

  return (
    <AppNavigator />
  );
};

YellowBox.ignoreWarnings(['Require cycle:']);
export default App;
