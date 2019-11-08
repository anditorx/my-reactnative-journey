// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// ---------------------------------------------------- //

// import library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/Header';

// create component
const App = () => (
  <Header headerText = {'Albums'} />
);
// render it to device
AppRegistry.registerComponent('albums', ()=> App);