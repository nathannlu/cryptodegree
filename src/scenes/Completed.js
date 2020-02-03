import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Completed = props => {
  const course = props.navigation.getParam('courseTitle');

  return (
    <View>
      <Text>
        Completed {course}
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

Completed.navigationOptions = () => ({
  header: props => <Header {...props} />
})

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
})

export default Completed;
