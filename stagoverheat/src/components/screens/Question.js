import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'


const QuestionList = [
  {title:"First Question", author: "Yahya",vote:1, description: "Description 1", createdAt: new Date("2019-10-17")},
  {title:"Second Question", author: "Diki",vote:3, description: "Description 2", createdAt: new Date("2019-10-18")},
  {title:"Third Question", author: "Budi",vote:2, description: "Description 3", createdAt: new Date("2019-10-19")},
  {title:"Fourth Question", author: "Jimmy",vote:1, description: "Description 4", createdAt: new Date("2019-10-20")},
  {title:"5 Question", author: "Doni",vote:3, description: "Description 5", createdAt: new Date("2019-10-21")},
];

function Item ({title, author, vote, description, createdAt}) {
  return (
    <ListItem onPress={() => {Actions.QuestionDetail({question: {title, author, vote, description, createdAt}})}}>
      <Body>
        <Text>{title}</Text>
        <Text note>{author}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" style={{color:"#0098ff"}} />
      </Right>
    </ListItem>
  );
}

export default class Question extends Component {

  renderHeader() {
    const {title} = this.props;
    return(
      <Header>
        <Body style={styles.bodyHeader}>
          <Title>{title}</Title>
        </Body>
      </Header>
    );
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content>
          <FlatList 
            data={QuestionList}
            renderItem={({item}) => <Item title={item.title} author={item.author} vote={item.vote} description={item.description} createdAt={item.createdAt}/>}
            keyExtractor={item => item.title}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  row:{
    flex:1,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  titleRow:{
    flex:4,
  },
  authorRow:{
    flex:1,
  },
  bodyHeader:{
    alignItems: 'center'
  }

});