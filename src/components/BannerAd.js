import React from 'react';
import firebase from 'react-native-firebase';

const BannerAd = () => {
  const Banner = firebase.admob.Banner;
  const AdRequest = firebase.admob.AdRequest;
  const request = new AdRequest();
  request.addKeyword('cryptocurrency'); 

  return (
    <Banner
      unitId={'ca-app-pub-3940256099942544/6300978111'}
      size={'LARGE_BANNER'}
      request={request.build()}
      onAdLoaded={() => console.log('Banner advert loaded')}
    />
  );
};

export default BannerAd;
