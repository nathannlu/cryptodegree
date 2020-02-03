import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

import * as RNIap from 'react-native-iap';
import { requestPurchase } from 'react-native-iap';
import useGlobalState from '../hooks/useGlobalState';

const itemSkus = Platform.select({
  ios: [
    'com.example.coins100'
  ],
  android: [
    'com.example.coins100'
  ]
});

const Profile = () => {
  const globalState = useGlobalState();
  const premiumStatus = globalState.premium;


  const requestPurchase = async (sku) => {
    try {
      await RNIap.requestPurchase(sku, false);
    } catch (err) {
      console.warn(err.code, err.message);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const result = await RNIap.initConnection();
        const products = await RNIap.getProducts(itemSkus);
        // console.warn('result', result);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    })();
  });


  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.iap}>
        <Text style={styles.h2}>Upgrade your account</Text>
        <Text>Get Crypto Degree Premium to remove all ads</Text>
        <View style={{marginTop: 125}}>
          <Button title="Go Pro" onPress={()=>globalState.setPremium(true)} />
        </View>
      </View>
        <Text>
          {premiumStatus === true ? 'true' : 'false'}
        </Text>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.h1}>Crypto Degree</Text>
      <Text style={styles.h3}>By NowFuture</Text>
      <Icon
        name="logo-instagram"
        style={styles.icon}
        color="#090E2C"
        size={27}
      />
    </View>
  );
};

Profile.navigationOptions = () => ({
  header: () => <Header />
});

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 25,
  },
  container: {
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    textAlign: 'center',
    width: '100%',
  },
  iap: {
    width: '100%',
    height: 270,
    backgroundColor: '#C4C4C4',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default Profile;
