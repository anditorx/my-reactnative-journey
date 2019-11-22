import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

const QuestionList = [
  {title:"First Question", author: "Yahya"},
  {title:"Second Question", author: "Diki"},
  {title:"Third Question", author: "Budi"},
  {title:"Fourth Question", author: "Jimmy"},
  {title:"5 Question", author: "Doni"},
];

function Item ({title, author}) {
  return (
    <Text>{title} - {author}</Text>
  );
}

export default class Question extends Component {

  render() {
    return (
      <View>
        <FlatList 
          data={QuestionList}
          renderItem={({item}) => <Item title={item.title} author={item.author} />}
          keyExtractor={item => item.title}
        />
      </View>
    )
  }
}