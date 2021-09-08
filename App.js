import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createSwitchNavigator,createAppContainer} from 'react-navigation'

import Login from './Screens/Login';
import Donate from './Screens/Donate';
import DrawerNavigator from './Navigation/DrawerNavigator';

export default function App() {
  return (
    /* <AppConatiner/>
  ); */
  <Donate/>
  )
}

const switchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  DrawerNavigator: {screen: DrawerNavigator}
})
const AppConatiner = createAppContainer(switchNavigator)
