import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableRipple } from "react-native-paper";

const Course = props => {
  return (
    <TouchableRipple 
      style={styles.course}
      onPress={() => props.handleOverviewNavigation(props.title)}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text>{props.title}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  course: {
    width: 185,
    height: 185,
    borderRadius: 10,
    backgroundColor: '#E8E8E8',
    marginBottom: 20,
    padding: 20
  }
});

export default Course;
