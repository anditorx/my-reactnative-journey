import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon } from 'native-base'


const QuestionList = [
  {title:"First Question", author: "Yahya"},
  {title:"Second Question", author: "Diki"},
  {title:"Third Question", author: "Budi"},
  {title:"Fourth Question", author: "Jimmy"},
  {title:"5 Question", author: "Doni"},
];

function Item ({title, author}) {
  return (
    // <View style={styles.row}>
    //   <View style={styles.titleRow}>
    //     <Text>{title}</Text>
    //   </View>
    //   <View style={styles.authorRow}>
    //     <Text>{author}</Text>
    //   </View>
    // </View>
    <ListItem>
      <Body>
        <Text>{author}</Text>
        <Text note>{title}</Text>
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
            renderItem={({item}) => <Item title={item.title} author={item.author} />}
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