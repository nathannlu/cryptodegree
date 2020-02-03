import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LessonPreview from '../components/LessonPreview';
import Button from '../components/Button';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Overview = props => {
  const course = props.navigation.getParam('courseTitle');
  const lessons = [
    {title: 'What is Bitcoin', id: 1},
    {title: 'What are Cryptocurrencies?', id: 2},
    {title: '13 Crypto YOutubers You Must Subscribe to', id: 3},
    {title: '12 Popular Crypto Tools and Resources to Use Every Day', id: 4},
    {title: 'What is Bitcoin', id: 5},
    {title: 'What are Cryptocurrencies?', id: 6},
    {title: '13 Crypto Youtubers You Must Subscribe to', id: 7},
    {title: '12 Popular Crypto Tools and Resources to Use Every Day', id: 8},
    {title: 'What is Bitcoin', id: 9},
    {title: 'What are Cryptocurrencies?', id: 10},
    {title: '13 Crypto YOutubers You Must Subscribe to', id: 11},
    {title: '12 Popular Crypto Tools and Resources to Use Every Day', id: 12},
  ];

  const [completedLessons, setCompletedLessons] = useState([])

  const handleLessonNavigation = (title, id) => {
    props.navigation.push('Lesson', {
      lessonTitle: title,
      lessonId: id,
      course,
    });
  };

  const handleCourseCompletion = title => {
    if (completedLessons.length === completedLessons.length) {
      // Save to async storage
      setCompletedCourses();
      props.navigation.push('Completed', {
        courseTitle: title,
      });
    } else {
      console.warn('You havent completed all the lessons yet');
    }
  };

  const retrieveCompletedLessons = async () => {
    try {
      const value = await AsyncStorage.getItem(`CompletedLessons:${course}`);
      if (value !== null) {
        setCompletedLessons(JSON.parse(value));
      }
    } catch (error) {
      console.log('retrieveCompeletedLessons Error:', error);
    }
  };

  const setCompletedCourses = async () => {
    try {
      const completedCourses = await AsyncStorage.getItem('CompletedCourses');
      let newCompletedCourses;

      if (completedCourses !== null) {
        newCompletedCourses = JSON.parse(completedCourses);
        
        if(!newCompletedCourses.includes(course)) {
          newCompletedCourses.push(course);
        }
      } else {
        newCompletedCourses = [course];
      }

      await AsyncStorage.setItem('CompletedCourses', JSON.stringify(newCompletedCourses))
      
    } catch (error) {
      console.warn(error);
    }
  }

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(`CompletedLessons:${course}`);
      return true;
    } catch (exception) {
      return false;
    }
  };

  useEffect(() => {
    retrieveCompletedLessons();
    if(completedLessons.length === lessons.length) {
      setCompletedCourse(true);
    }
  });

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Icon name="md-arrow-back" size={27}></Icon>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <Text style={styles.h3}>The basics</Text>
          <Text style={styles.h1}>{course}</Text>

          <Text style={styles.h4}>Lessons</Text>
        </View>
        <View style={{paddingBottom: 30}}>
          {lessons.map((lesson, i) => (
            <LessonPreview
              title={lesson.title}
              handleLessonNavigation={handleLessonNavigation}
              course={course}
              id={i}
              key={i}
              completedLessons={completedLessons}
            />
          ))}
        </View>
        <View style={styles.container}>
          <Button title="refresh" onPress={() => removeItem()} />
          <Button
            title="Complete this course"
            onPress={() => handleCourseCompletion(course)}
          />
        </View>        
      </View>

    </ScrollView>
  );
};

Overview.navigationOptions = () => ({
  // header: props => <Header {...props} />,
  headerShown: false,
});

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
  contentWrapper: {
    marginTop: 200,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 20,
  }, 
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Overview;
