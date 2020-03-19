import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {setRoot,pushScreen} from '../config/ControllScreen'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          {/* pushScreen(this.props.componentId, 'AddJabatan') */}
          {/* setRoot('AddJabatan') */}
            <Button hasText transparent onPress={() => pushScreen(this.props.componentId, 'AddJabatan')}>
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
