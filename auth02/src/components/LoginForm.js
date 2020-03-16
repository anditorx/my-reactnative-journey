import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import {Button,Card,CardSection,Input} from './common';

class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
		}
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
				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm;
