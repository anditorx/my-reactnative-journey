import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <Text> {props.dataAlbum.title} </Text>
      </CardSection>
      <CardSection>
        <Text> {props.dataAlbum.artist} </Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
