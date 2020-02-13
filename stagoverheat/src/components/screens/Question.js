import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import {observer} from 'mobx-react/native'



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

@observer
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
    const {data} = this.props.store;
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