// import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screen/Home';
import Laporan from './screen/Laporan';

const Navigator = createStackNavigator(
  {
    Home: Home,
    Laporan: Laporan,

  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  }

);


export default createAppContainer(Navigator);