import React, {useState, useEffect} from 'react';
import { Button, Image, View, YellowBox, Platform} from 'react-native';
import firebase from 'react-native-firebase';

import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {

  return (
      <AppNavigator />
  );
};

YellowBox.ignoreWarnings(['Require cycle:']);
export default App;
