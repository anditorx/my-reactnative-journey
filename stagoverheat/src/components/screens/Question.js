import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const QuestionList = [
  {title:"First Question", author: "Yahya"},
  {title:"Second Question", author: "Diki"},
  {title:"Third Question", author: "Budi"},
  {title:"Fourth Question", author: "Jimmy"},
  {title:"5 Question", author: "Doni"},
];

function Item ({title, author}) {
  return (
    <View style={styles.row}>
      <View style={styles.titleRow}>
        <Text>{title}</Text>
      </View>
      <View style={styles.authorRow}>
        <Text>{author}</Text>
      </View>
    </View>
  );
}

export default class Question extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={QuestionList}
          renderItem={({item}) => <Item title={item.title} author={item.author} />}
          keyExtractor={item => item.title}
        />
      </View>
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
  }

});