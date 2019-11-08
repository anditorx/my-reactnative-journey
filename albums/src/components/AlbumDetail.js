import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({dataAlbum}) => {

  const {title,artist,thumbnail_image,image} = dataAlbum;
  const {thumbnailStyle,headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: image}}
        />
      </CardSection>
      <CardSection>
        <Button  />
      </CardSection>
    </Card>
  );
}

const styles = {
  thumbnailContainerStyle : {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle:{
    fontSize: 18,
    
  },
  headerContentStyle : {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle : {
    height : 50,
    width: 50,
  },
  imageStyle : {
    height: 300,
    width: null,
    flex: 1,
  }
}


export default AlbumDetail;