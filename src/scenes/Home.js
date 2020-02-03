import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import useGlobalState from '../hooks/useGlobalState';

const Home = () => {
  const globalState = useGlobalState();
  const premiumStatus = globalState.premium;

  return (
    <View>
      <Text style={{fontSize: 20, marginLeft: 15}}>
        {premiumStatus === true ? 'true' : 'false'}
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