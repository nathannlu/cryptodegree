import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg, {Circle, Rect} from 'react-native-svg';

const LoadingFeed = () => {
  return (
    <SvgAnimatedLinearGradient height={500} width={'100%'} x2="100%" y2="100%">
      <Rect x="0" y="0" rx="2" ry="2" width="150" height="20" />
      <Rect x="0" y="30" rx="2" ry="2" width="100" height="15" />

      <Rect x="0" y="60" rx="5" ry="5" width="270" height="187.5" />

      <Rect x="0" y="267.5" rx="2" ry="2" width="270" height="20" />
      <Circle cx="12.5" cy="310" r="12.5" />
      <Rect x="35" y="303.75" rx="2" ry="2" width="100" height="15" />

      <Rect x="0" y="370" rx="25" ry="25" width="100%" height="45" />
    </SvgAnimatedLinearGradient>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 270,
    height: 250,
    marginTop: 15,
  },
  sourceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingBox: {
    height: '75%',
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    marginBottom: 20,
  },
  loadingText: {
    height: 20,
    width: '100%',
    backgroundColor: '#E8E8E8',
    marginBottom: 10,
  },
  loadingTextLarge: {
    height: 25,
    width: 150,
    backgroundColor: '#E8E8E8',
    marginBottom: 5,
  },
  loadingTextSmall: {
    height: 15,
    width: 100,
    backgroundColor: '#E8E8E8',
  },
  loadingAvatar: {
    height: 25,
    width: 25,
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    marginRight: 10,
  },
  loadingButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#E8E8E8',
    marginTop: 60,
    borderRadius: 100,
  },
});

export default LoadingFeed;
