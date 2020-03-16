import React, { Component } from 'react'
import { Text, View,SafeAreaView, } from 'react-native'
import firebase from 'firebase';
import {Header} from './components/common';

export default class App extends Component {

	componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCDRBw3KyjO3R5art-FE4TESYZaKSNTkIw",
			authDomain: "auth-95672.firebaseapp.com",
			databaseURL: "https://auth-95672.firebaseio.com",
			projectId: "auth-95672",
			storageBucket: "auth-95672.appspot.com",
			messagingSenderId: "396628262445",
			appId: "1:396628262445:web:e15d9b4e2a6cdd510f82a4"
		});
	}

	render() {
		return (
			<SafeAreaView>
				<Header headerText = {"Authentication"} />
				<Text> textInComponent </Text>
			</SafeAreaView>
		)
	}
}
