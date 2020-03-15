/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			albums: [],
		};
	}

  componentDidMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({albums: response.data}));
	}

	_renderAlbums(){
		return this.state.albums.map(
			album => <AlbumDetail key={album.url} dataAlbum={album} />
		);
	}

  render() {
		console.log(this.state);
    return (
      <ScrollView>
        {this._renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
