import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeStack,
  CoursesStack,
  DiscoverStack,
  ProfileStack,
} from './StackNavigator';

const bottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Courses: CoursesStack,
    Discover: DiscoverStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarLabel: navigation.state.routeName,
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'Home':
            return <Icon name="ios-home" color={tintColor} size={25} />;
          case 'Courses':
            return <Icon name="ios-folder-open" color={tintColor} size={25} />;
          case 'Discover':
            return <Icon name="ios-compass" color={tintColor} size={25} />;
          case 'Profile':
            return <Icon name="ios-settings" color={tintColor} size={25} />;
        }
      },
    }),
    initialRouteName: 'Home',
    activeColor: '#090E2C',
    inactiveColor: '#848796',
    barStyle: {
      backgroundColor: '#fff',
      shadowOffset: {width: 0, height: 0},
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
    tabBarOptions: {
      showIcon: true,
    },
  },
);

export default bottomTabNavigator;
