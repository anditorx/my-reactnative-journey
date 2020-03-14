/* eslint-disable prettier/prettier */
import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import Header from './components/Header';

const App = () => (
	<>
		<StatusBar barStyle="dark-content" />
		<SafeAreaView>
			<Header headerText={'Albums'}/>
			<View>
				<Text>Test</Text>
			</View>
		</SafeAreaView>
	</>
);

export default App;
