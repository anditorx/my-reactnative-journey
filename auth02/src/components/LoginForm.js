import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, View, TextInput } from 'react-native'
import {Button,Card,CardSection,Input, Spinner} from './common';

class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false,
		}
	}

	_onButtonPress() {
		const {email,password} = this.state;		
		this.setState({error: '',loading: true});
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(this._onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email,password)
			.then(this._onLoginSuccess.bind(this))
			.catch(this._onLoginFail.bind(this));
		});
	}

	_onLoginSuccess(){
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: '',
		})
	}

	_onLoginFail() {
		this.setState({
			error: 'Authantication Failed.', 
			loading: false
		})
	}

	renderButton() {
		if (this.state.loading == true) {
			return <Spinner size="small" />
		}
		return(
			<Button onPress={this._onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label = "Email"
						placeholder = "youremial@mail.com"
						onChangeText={ email => this.setState({ email })}
						value={this.state.email}
						secureTextEntry={false}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label = "Password"
						placeholder = "Your password"
						onChangeText={ password => this.setState({ password })}
						value={this.state.password}
						secureTextEntry={true}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	}
}

export default LoginForm;
