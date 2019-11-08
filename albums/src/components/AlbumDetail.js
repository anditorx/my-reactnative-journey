import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

  return (
    <Card>
      <CardSection>
        <Text> {props.dataAlbum.title} </Text>
      </CardSection>
      
    </Card>
  );
  
}


export default AlbumDetail;