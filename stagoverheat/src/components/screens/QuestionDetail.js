// Question Detail

import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button, Card, CardItem, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'
import moment from 'moment'

export default class QuestionDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote:0,
    }
  }

  componentWillMount() {
    const {vote} = this.props.question;
    this.setState({vote: vote});
  }
  

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

  voteUp() {
    const currentVote = this.state.vote;
    this.setState({vote: currentVote + 1});
  }

  voteDown() {
    const currentVote = this.state.vote;
    this.setState({vote: currentVote - 1});
  }

  render() {
    const{ title, author, description, createdAt } = this.props.question;
    const{ vote } = this.state;
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
                  <Text note>{ author }, on{moment(createdAt).format("DD/MM/YYYY")}</Text>
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
                <Button transparent onPress={()=> this.voteUp()}>
                  <Icon active name="arrow-up" />
                </Button>
                <Text>{vote}</Text>
                <Button transparent onPress={()=> this.voteDown()} >
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