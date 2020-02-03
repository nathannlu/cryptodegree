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
      const completedCourses = await AsyncStorage.getItem(`CompletedCourses:${course}`);
      let newCompletedCourses;

      if (completedCourses !== null) {
        newCompletedCourses = JSON.parse(completedCourses);
        
        if(!newCompletedCourses.includes(_id)) {
          newCompletedCourses.push(_id);
        }
      } else {
        newCompletedCourses = [_id];
      }

      console.warn('stored', newCompletedCourses)
      // update async storage
      await AsyncStorage.setItem(`CompletedCourses:${course}`, JSON.stringify(newCompletedCourses))
      
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