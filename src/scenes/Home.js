import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import BannerAd from '../components/BannerAd';
import useGlobalState from '../hooks/useGlobalState';

const Home = () => {
  const globalState = useGlobalState();
  const premiumStatus = globalState.premium;

  useEffect(()=>{
    // Check IAP if subscription exists
    globalState.setPremium({premium: true})
  }, [])

  return (
    <View>
      <Text>
        {premiumStatus.premium === true ? '' : <BannerAd />}
      </Text>
      
      <Text style={{fontSize: 20, marginLeft: 15}}>
        {premiumStatus.premium === true ? 'true' : 'false'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
});

 export default Home;