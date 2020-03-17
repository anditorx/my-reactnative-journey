import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import {Header} from './components/common'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AppNavigator from './AppNavigator';

// const RootStack = createStackNavigator(
//   {
// 		Login: LoginForm,
// 		List: EmployeeList,
// 	},
// 	{
//     initialRouteName: 'Login',
//   }
// );

// const AppNavigator = createAppContainer(RootStack)

class App extends Component {

	componentDidMount(){
		var firebaseConfig = {
			apiKey: "AIzaSyBNsJAvLmMBasSkO7PSFODqLqh4n7iMrIo",
			authDomain: "employcheck-183a3.firebaseapp.com",
			databaseURL: "https://employcheck-183a3.firebaseio.com",
			projectId: "employcheck-183a3",
			storageBucket: "employcheck-183a3.appspot.com",
			messagingSenderId: "687494754980",
			appId: "1:687494754980:web:70ef1b6083fc2724a36c31"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<SafeAreaView style={{flex: 1}}>
					{/* <LoginForm /> */}
					<AppNavigator />
				</SafeAreaView>
			</Provider>
		);
	}
}

export default App;