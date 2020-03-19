import React, { Component} from 'react';
import {Platform} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Text,Left,Right,Title,Body} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import {Navigation} from 'react-native-navigation'


export default class AddJabatan extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> Navigation.pop(this.props.componentId)}>
              <Icon name="arrowleft" style={{fontSize: 25, color: Platform.OS == 'android' ? 'white' : 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title>Create Divisi</Title>
          </Body>
					<Right></Right>
        </Header>
        <Content>
          <Form style={{marginHorizontal: 15}}>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Comment</Label>
              <Input />
            </Item>
						<Button block style={{marginTop: 50}}>
							<Text>Submit</Text>
						</Button>
          </Form>
        </Content>
      </Container>
    );
  }
}