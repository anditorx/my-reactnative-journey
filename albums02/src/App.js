/* eslint-disable prettier/prettier */
import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => (
	<>
		<StatusBar barStyle="dark-content" />
		<SafeAreaView style={{flex: 1}}>
			<Header headerText={'Albums'}/>
			<AlbumList />
		</SafeAreaView>
	</>
);

export default App;
