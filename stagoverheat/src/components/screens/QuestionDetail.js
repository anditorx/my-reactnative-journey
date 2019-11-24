// Question Detail

import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button, Card, CardItem, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class QuestionDetail extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     vote:0,
  //   }
  // }

  // componentWillMount() {
  //   const {vote} = this.props.question;
  //   this.setState({vote: vote});
  // }
  

  renderHeader() {
    const {title} = this.props;
    return(
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.pop()} >
            <Icon name="arrow-back" style={{color: 'white'}} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right/>
      </Header>
    );
  }

  render() {
    const{ title, author,vote, description, createdAt } = this.props.question;
    return (
      <Container>
        {this.renderHeader()}
        <Content>
          
          <Card>
            <CardItem bordered>
              <Left>
                <Icon name="help-circle" />
                <Body>
                  <Text>{ title }</Text>
                  <Text note>{ author }, on{createdAt.toString()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {description}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="arrow-up" />
                </Button>
                <Text>{vote}</Text>
                <Button transparent>
                  <Icon active name="arrow-down" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}