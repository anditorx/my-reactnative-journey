import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect } from 'react-redux'
import {emailChanged,passwordChanged,loginUser} from '../actions'
import {Card, CardSection,Input, Button, Spinner} from './common'

export class LoginForm extends Component {

	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const {email,password} = this.props;
		this.props.loginUser({email,password});
	}

	renderError() {
		if (this.props.error) {
			return(
				<View style={{backgroundColor: 'white'}}> 
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderButton(){
		if(this.props.loading){
			return <Spinner size="large" />
		}
		return(
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="email@mail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password"
						placeholder="Your Password"
						secureTextEntry={true}
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>
					
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 18,
		alignSelf: 'center',
		color: 'red',
	}
}

const mapStateToProps = state => {
	// const {email, password, error, loading} = auth;
	
	return {
		email : state.auth.email,
		password : state.auth.password,
		error : state.auth.error,
		loading : state.auth.loading
	}
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser}) (LoginForm)
