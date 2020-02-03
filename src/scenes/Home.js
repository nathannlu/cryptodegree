import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const Home = () => {
  return (
    <View>
      <Text style={{fontSize: 20, marginLeft: 15}}>
        Home
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