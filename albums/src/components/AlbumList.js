// import library for making a component
import React, {Component} from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

// make a component & make the component available to other parts of the app
export default class AlbumList extends Component {

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response)
    );
  }

  render () {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
};

const styles = {
  
}