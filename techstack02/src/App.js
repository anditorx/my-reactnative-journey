import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import {Header} from './components/common';
import LibraryList from './components/LibraryList';
import { 
	View,
	Text,
	SafeAreaView 
} from 'react-native'


const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<SafeAreaView style={{flex: 1}}>
				<Header headerText={"Techstack 2"}/>
				<LibraryList />
			</SafeAreaView>
		</Provider>
	)
}

export default App
