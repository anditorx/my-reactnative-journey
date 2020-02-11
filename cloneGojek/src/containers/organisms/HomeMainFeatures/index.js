import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import MainFeatures from '../../../components/molecules/MainFeatures';


class HomeMainFeatures extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
          <MainFeatures img={require('../../../assets/icon/go-ride.png')} title={'GO-RIDE'} />
          <MainFeatures img={require('../../../assets/icon/go-car.png')} title={'GO-CAR'} />
          <MainFeatures img={require('../../../assets/icon/go-bluebird.png')} title={'GO-BLUEBIRD'} />
          <MainFeatures img={require('../../../assets/icon/go-send.png')} title={'GO-SEND'} />
          <MainFeatures img={require('../../../assets/icon/go-deals.png')} title={'GO-DEALS'} />
          <MainFeatures img={require('../../../assets/icon/go-pulsa.png')} title={'GO-PULSA'} />
          <MainFeatures img={require('../../../assets/icon/go-food.png')} title={'GO-FOOD'} />
          <MainFeatures img={require('../../../assets/icon/go-more.png')} title={'MORE'} />
        </View>
      </View>
    )
  }
}

export default HomeMainFeatures