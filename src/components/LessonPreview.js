import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const LessonPreview = props => {
  const [completed, setCompleted] = useState(false);
  
  useEffect(()=>{
    props.completedLessons.forEach(lesson => {
      if(lesson === props.id) setCompleted(true);
    })
  })


  return (
    <TouchableHighlight onPress={()=>props.handleLessonNavigation(props.title, props.id)} underlayColor="black">
      <View style={styles.lessonWrapper}>
        <View style={styles.circle}>
          <Text>
            {completed ? 'completed': ''}
          </Text>
          
        </View>
        <Text numberOfLines={2} style={styles.lessonTitle}>
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  lessonWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
  },
  circle: {
    width: '10%',
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#C4C4C4',
  },
});

export default LessonPreview;
