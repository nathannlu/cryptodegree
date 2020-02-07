import React from 'react';
import {View, Text} from 'react-native';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg, {Circle, Rect} from 'react-native-svg';

const LoadingLessonPreview = () => {
  return (
    <View>
      <SvgAnimatedLinearGradient
        x2="100%" y2="100%"
        width={'100%'}
        height={140}>
        <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <Rect x="80" y="0" rx="4" ry="4" width="100%" height="13" />
        <Rect x="80" y="20" rx="4" ry="4" width="100%" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="50%" height="13" />
      </SvgAnimatedLinearGradient>
    </View>
  );
};

export default LoadingLessonPreview;
