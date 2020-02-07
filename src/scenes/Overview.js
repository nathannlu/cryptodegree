import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LessonPreview from '../components/LessonPreview';
import LoadingLessonPreview from '../components/LoadingLessonPreview';
import Button from '../components/Button';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import axios from "react-native-axios";

const Overview = props => {
  const course = props.navigation.getParam('courseTitle');
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [completedLessons, setCompletedLessons] = useState([])
  const freeLessons = [0,1,2,3,4];
  const URL =
  "https://cryptodegree-api.herokuapp.com/api/lessons/" +
  encodeURIComponent(course);

  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setLessons(response.data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
    //analytics.screen("Course overview screen");
  }, []);
  
  const handleLessonNavigation = (title, id, lesson) => {
    props.navigation.push('Lesson', {
      lessonTitle: title,
      lesson: lesson,
      lessonId: id,
      course,
    });
  };

  const handleCourseCompletion = title => {
    if (completedLessons.length === completedLessons.length) {
      // Save to async storage
      // setCompletedCourses();
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
      //setCompletedCourse(true);
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
        {isLoading ? (
          <View style={styles.container}>
            <LoadingLessonPreview />
          </View>          
        ) : (
          <View style={{paddingBottom: 30}}>
            {lessons.map((lesson, i) => (
              <LessonPreview
                title={lesson.title}
                handleLessonNavigation={handleLessonNavigation}
                course={course}
                lesson={lesson}
                id={i}
                key={i}
                locked={!freeLessons.includes(i)}
                completedLessons={completedLessons}
              />
            ))}
          </View>          
        )}


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
