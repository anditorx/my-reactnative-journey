import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common'

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
				<SafeAreaView>
					{/* <Header headerText={"Emplocheck"} /> */}
					<LoginForm/>
				</SafeAreaView>
			</Provider>
		);
	}
}

export default App;