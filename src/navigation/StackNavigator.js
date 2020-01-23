import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../scenes/Home'
import Level from '../scenes/Level'
import Discover from '../scenes/Discover'
import Profile from '../scenes/Profile'


export const HomeStack = createStackNavigator({
  Home: Home,
  //Overview: CourseOverviewStack,
})

export const CoursesStack = createStackNavigator({ 
  Courses: Level,
  //Overview: CourseOverviewStack,
})

export const DiscoverStack = createStackNavigator({
  Discover: Discover,
  //ViewAll: ViewAllScreen,
  //Browser: Browser
})

export const ProfileStack = createStackNavigator({
  Profile: Profile
})
