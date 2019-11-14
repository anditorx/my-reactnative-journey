import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
          />  
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { emailChanged }) (LoginForm);