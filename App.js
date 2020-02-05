import React, {useState, useEffect} from 'react';
import { Button, Image, View, YellowBox} from 'react-native';
import firebase from 'react-native-firebase';

import {GlobalStateProvider} from './src/hooks/useGlobalState';
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  /*
  const advert = firebase.admob().interstitial('ca-app-pub-3940256099942544/1033173712');

  const AdRequest = firebase.admob.AdRequest;
  const request = new AdRequest();
  //request.addKeyword('cryptocurrency').addKeyword('bitcoin');

  advert.loadAd(request.build());

  advert.on('onAdLoaded', () => {
    console.log('advert is ready to show');
  })

  setTimeout(() => {
    if (advert.isLoaded()) {
      advert.show();
    } else {
      console.warn('advert not loaded')
    }
  }, 5000);
  */
 
  return (
    <GlobalStateProvider>
      <AppNavigator />
    </GlobalStateProvider>
  );
};

YellowBox.ignoreWarnings(['Require cycle:']);
export default App;
