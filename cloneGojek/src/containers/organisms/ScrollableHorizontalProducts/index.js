import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem';


class ScrollableHorizontalProducts extends Component {
  render() {
    return (
      <View style={{}}>
        <View style={{ height: 15, width: 60, marginLeft: 16}} >
          <Image source={require('../../../assets/logo/go-food.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Nearby Restaurants</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
        </View>
        <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingLeft: 16, marginBottom: 20}}>
          <ScrollableItem img={require('../../../assets/dummy/go-food-kfc.jpg')} menuItem={"KFC AEON Mall"}/>
          <ScrollableItem img={require('../../../assets/dummy/go-food-gm.jpg')} menuItem={"Bakmi GM AEON Mall"}/>
          <ScrollableItem img={require('../../../assets/dummy/go-food-orins.jpg')} menuItem={"Martabak Orins"}/>
          <ScrollableItem img={require('../../../assets/dummy/go-food-banka.jpg')} menuItem={"Martabak Banka"}/>
          <ScrollableItem img={require('../../../assets/dummy/go-food-pak-boss.jpg')} menuItem={"Ayam Bakar Pak Boss"}/>
        </ScrollView>
        <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginHorizontal: 16 }}></View>
      </View>
    )
  }
}

export default ScrollableHorizontalProducts