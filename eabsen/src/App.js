// import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Laporan from './screen/Laporan';
import Navigator from './Navigator';


function App() {
	
	return (
    <Navigator/>
  );
}

export default App;