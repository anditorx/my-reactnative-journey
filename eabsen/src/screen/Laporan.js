import React, { Component } from 'react';
import {View,TouchableOpacity} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Icon,Title } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container >
        <Header style={{backgroundColor: "white"}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' style={{color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Laporan</Title>
            {/* <Subtitle>Subtitle</Subtitle> */}
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/img/banner_product_knowledge_black1.png')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <TouchableOpacity>
                    <Text>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>History</Text>
                  </TouchableOpacity>
                </Button>
              </Right>
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}