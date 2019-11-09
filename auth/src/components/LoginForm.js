import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {

  state = {
    email : '',
    password : '',
    error: '',
    loading : false,
  }

  onButtonPress() {
    const {email,password} = this.state;

    this.setState({
      error : '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(() =>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(() => {
        this.setState({error: 'Authentication Failed.'});
      });
    });
  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size={"small"} />
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
            label = {'Email'}
            placeholder = {'user@mail.com'}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label = {'Password'}
            placeholder = {'Your password'}
            onChangeText={password => this.setState({password})}
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