import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../scenes/Home'

import Discover from '../scenes/Discover'
import ViewAll from '../scenes/ViewAll'
import Browser from '../scenes/Browser'


import Profile from '../scenes/Profile'

import Courses from '../scenes/Courses'
import Overview from '../scenes/Overview'
import Lesson from '../scenes/Lesson'
import Completed from '../scenes/Completed'
import Graduated from '../scenes/Graduated'

export const HomeStack = createStackNavigator({
  Home: Home,
})

export const CoursesStack = createStackNavigator({ 
  Courses: Courses,
  Overview: Overview,
  Lesson: Lesson,
  Completed: Completed,
  Graduated: Graduated
})

CoursesStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) tabBarVisible = false;

  return tabBarVisible
}

export const DiscoverStack = createStackNavigator({
  Discover: Discover,
  ViewAll: ViewAll,
  Browser: Browser
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
})

export const ProfileStack = createStackNavigator({
  Profile: Profile
})
