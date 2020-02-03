import React from 'react';
import {View, Text, ScrollView, Button, AsyncStorage} from 'react-native';

const Lesson = props => {
  const lesson = props.navigation.getParam("lessonTitle");
  const course = props.navigation.getParam("course");
  const _id = props.navigation.getParam("lessonId");

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  const storeData = async () => {
    try {
      const completedLessons = await AsyncStorage.getItem(`CompletedLessons:${course}`);
      let newCompletedLessons;

      if (completedLessons !== null) {
        newCompletedLessons = JSON.parse(completedLessons);
        
        if(!newCompletedLessons.includes(_id)) {
          newCompletedLessons.push(_id);
        }
      } else {
        newCompletedLessons = [_id];
      }
      // update async storage
      await AsyncStorage.setItem(`CompletedLessons:${course}`, JSON.stringify(newCompletedLessons))
      
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          console.warn("Reached end of page");
        }
      }}
    >
      <Text>
        {lesson}
      </Text>
      <Button title="Mark as complete" onPress={()=>storeData() }/>
    </ScrollView>
  )
}

Lesson.navigationOptions = () => ({

})

export default Lesson;