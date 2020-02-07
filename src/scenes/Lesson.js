import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import HTML from 'react-native-render-html';

const Lesson = props => {
  const lessonTitle = props.navigation.getParam('lessonTitle');
  const course = props.navigation.getParam('course');
  const _id = props.navigation.getParam('lessonId');
  const URL =
    'https://cryptodegree-api.herokuapp.com/api/lessons/' +
    encodeURIComponent(course) +
    '/' +
    encodeURIComponent(lessonTitle);

  const [lesson, setLesson] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLesson(props.navigation.getParam('lesson'));
  }, []);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  const storeData = async () => {
    try {
      const completedLessons = await AsyncStorage.getItem(
        `CompletedLessons:${course}`,
      );
      let newCompletedLessons;

      if (completedLessons !== null) {
        newCompletedLessons = JSON.parse(completedLessons);

        if (!newCompletedLessons.includes(_id)) {
          newCompletedLessons.push(_id);
        }
      } else {
        newCompletedLessons = [_id];
      }
      // update async storage
      await AsyncStorage.setItem(
        `CompletedLessons:${course}`,
        JSON.stringify(newCompletedLessons),
      );
      //globalState.setPremium({ ...premiumStatus, [`CompletedLessons:${course}`]: newCompletedLessons })
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <ScrollView
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          storeData();
        }
      }}>
      <View>
        <View style={{padding: 20}}>
          <Text style={styles.h1}>{lessonTitle}</Text>
          <Text style={styles.h3}>{course}</Text>
          <Text>Lesson {_id + 1} &bull; 15 min read</Text>
        </View>
        <Image source={{uri: lesson.thumbnail}} style={{height: 300}} />
        <View style={{paddingHorizontal: 20, paddingTop: 40}}>
          <HTML
            html={lesson.content}
            imagesMaxWidth={Dimensions.get('window').width}
            baseFontStyle={{fontSize: 20, lineHeight: 32, color: '#33325C'}}
          />
        </View>
        <View style={[styles.container, {paddingVertical: 20}]}>
          <Button title="Complete Lesson" onPress={() => storeData()} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
    marginBottom: 20,
  },
});

export default Lesson;
