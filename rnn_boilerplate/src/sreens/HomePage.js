import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Card, CardItem } from 'native-base';
import { setRoot, pushScreen } from '../config/ControllScreen'

import { inject, observer } from 'mobx-react';
@inject("AuthStore") @observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisi: ''
    };
  }

  async componentDidMount() {
    const dataResult = await this.props.AuthStore.getDivisi();
    this.setState({
      divisi: dataResult.result
    })
  }


  _renderDivisiList() {
    return (
      this.state.divisi !== '' ?
        this.state.divisi.map((data) => {
          return (
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    {data.divisi_name}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          );
        })
        : null
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title>Divisi</Title>
          </Body>
          <Right>
            {/* pushScreen(this.props.componentId, 'AddJabatan') */}
            {/* setRoot('AddJabatan') */}
            <Button hasText transparent onPress={() => pushScreen(this.props.componentId, 'AddDivisi')}>
              <Text>Add New Divisi</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          {this._renderDivisiList()}
        </Content>
      </Container>
    );
  }
}
