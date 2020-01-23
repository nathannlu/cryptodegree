import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
    Main: BottomTabNavigator
  })
)

export default AppContainer