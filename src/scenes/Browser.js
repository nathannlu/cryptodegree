import React from 'react';
import { WebView } from 'react-native-webview';

const Browser = props => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: props.navigation.getParam('link')}}
    />
  )
}

export default Browser