import React, { Component } from 'react'
import { Text, View, SafeAreaView, } from 'react-native'
import firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from '../src/components/LoginForm';

export default class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			loggedIn: false
		}
	}

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

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({loggedIn: true});
			}else{
				this.setState({loggedIn: false});
			}
		});
	}

	_renderContent(){

		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log Out
						</Button>
						</CardSection>
					</Card>
				);
				case false:
					return <LoginForm/>;
			default:
				return <Spinner size="large" />;
		}

		
	}

	render() {
		return (
			<SafeAreaView>
				<Header headerText = {"Authentication"} />
				{this._renderContent()}
			</SafeAreaView>
		)
	}
}
