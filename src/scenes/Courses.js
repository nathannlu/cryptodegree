import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, AsyncStorage} from 'react-native';
import Course from '../components/Course';
import Button from '../components/Button';

const Courses = props => {
  const [completedCourses, setCompletedCourses] = useState([])

  const handleOverviewNavigation = title => {
    props.navigation.push('Overview', {
      courseTitle: title,
    });
  };

  const handleGraduation = () => {
    if(completedCourses.length === courses.length) {
      props.navigation.push('Graduated')
    } else {
      // alert x more courses to go
    }
    
  }

  const retrieveCompletedCourses = async () => {
    try {
      const value = await AsyncStorage.getItem('CompletedCourses');
      if (value !== null) {
        setCompletedCourses(JSON.parse(value));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(()=> {
    retrieveCompletedCourses();
  })

  const courses = ['Crypto 101', 'Security', 'Exchanges', 'Investing'];

  return (
    <View style={{flex: 1}}>
      <Header completedCourses={completedCourses} />
      
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.h2}>Get Certificate</Text>
          {completedCourses.length === 4 ? (
            <Text>You can graduate.</Text>
          ) : (
            <Text>{4 - completedCourses.length} more courses before graduation</Text>          
          )}
          <View style={{marginTop: 85}}>
            <Button title="Get your degree" onPress={() => handleGraduation()} />
          </View>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingVertical: 10}}>
            Courses
          </Text>

          <View style={styles.coursesContainer}>
            {courses.map((course, i) => (
              <Course
                title={course}
                handleOverviewNavigation={handleOverviewNavigation}
                key={i}
              />
            ))}
          </View>
        </View>
      </ScrollView>      
    </View>

  );
};

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Courses</Text>

      <View style={{paddingTop: 20}}>
        <Text style={styles.h3}>{props.completedCourses.length}/4 Courses Complete</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress}></View>
        </View>
      </View>
    </View>
  );
};

Courses.navigationOptions = () => ({
  // header: <Header />
  headerShown: false
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    padding: 16,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
    marginBottom: 5,
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    overflow: 'hidden',
  },
  progress: {
    width: 130,
    height: '100%',
    backgroundColor: '#1D1D1D',
    borderRadius: 100,
  },
  card: {
    width: '100%',
    height: 230,
    backgroundColor: '#C4C4C4',
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 20,
    borderRadius: 10,
  },
  coursesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Courses;
