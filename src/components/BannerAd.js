import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';

const BannerAd = () => {
  const Banner = firebase.admob.Banner;
  const AdRequest = firebase.admob.AdRequest;
  const request = new AdRequest();
  request.addKeyword('cryptocurrency');

  return (
    <Banner
      unitId={'ca-app-pub-9198577621950926/4793104368'}
      size={'LARGE_BANNER'}
      request={request.build()}
      onAdLoaded={() => console.log('Banner advert loaded')}
    />
  );
};

export default BannerAd;
