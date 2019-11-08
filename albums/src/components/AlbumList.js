// import library for making a component
import React, {Component} from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

// make a component & make the component available to other parts of the app
export default class AlbumList extends Component {

  state = {
    albums : [],
  };

  componentDidMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => console.log(response)
    // );
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data})
    );
  }

  renderAlbums () {
    return this.state.albums.map(
      album => <Text key={album.title}>{album.title}</Text>
    );
  }

  render () {
    console.log(this.state);
    
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
};

const styles = {
  
}