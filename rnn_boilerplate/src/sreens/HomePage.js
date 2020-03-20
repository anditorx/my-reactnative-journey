import React, { Component } from 'react';
import { View, Alert,TouchableNativeFeedback,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Card, CardItem } from 'native-base';
import UpdateDivisi from './UpdateDivisi';

import { setRoot, pushScreen } from '../config/ControllScreen'
import { inject, observer } from 'mobx-react';
@inject("AuthStore") @observer
// DILARANG IMPORT APAPUN DI MARIH!! BUKAN RUMAH NENEK
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisi: ''
    };
  }

  async componentDidMount() {
    const response = await this.props.AuthStore.getDivisi();
    this.setState({
      divisi: response.result
    })
  }

  // async componentDidUpdate() {
  //   const response = await this.props.AuthStore.getDivisi();
  //   this.setState({
  //     divisi: response.result
  //   })
  // }

  


  _renderDivisiList() {
    return (
      this.state.divisi !== '' ?
        this.state.divisi.map((data, key) => {
          return (
            <TouchableOpacity onPress={() => pushScreen(this.props.componentId, 'UpdateDivisi',data.id)}>
              <Card key={key} >
                <CardItem>
                  <Body>
                    <Text>
                      {data.divisi_name}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
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
              <Text>Add New</Text>
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
