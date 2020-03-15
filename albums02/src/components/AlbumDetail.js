import React, {Component} from 'react';
import {Text, View} from 'react-native';

const AlbumDetail = props => {
  return (
    <View>
      <Text> {props.dataAlbum.title} </Text>
    </View>
  );
};

export default AlbumDetail;
