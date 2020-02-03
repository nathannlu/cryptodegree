import React, {useState, useEffect} from 'react';
import { Button, Image, View, YellowBox, Platform} from 'react-native';
import firebase from 'react-native-firebase';

import useGlobalState, {GlobalStateProvider} from './src/hooks/useGlobalState';
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  //const globalState = useGlobalState();
  //const premiumStatus = globalState.premium;

  useEffect(() => {
    //globalState.setPremium(true)
  }, [])

  return (
    <GlobalStateProvider>
      <AppNavigator />
    </GlobalStateProvider>
  );
};

YellowBox.ignoreWarnings(['Require cycle:']);
export default App;
