import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@mail.com"
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

export default LoginForm;