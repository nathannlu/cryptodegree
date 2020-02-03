import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Graduated = () => {

  return (
    <View>
      <Text>
        Congratulations on your graduation
      </Text>
    </View>
  )
}

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
        <Icon name="md-close" size={27}></Icon>
      </TouchableWithoutFeedback>
    </View>
  );
};

Graduated.navigationOptions = () => ({
  header: props => <Header {...props} />
})

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
})

export default Graduated;
