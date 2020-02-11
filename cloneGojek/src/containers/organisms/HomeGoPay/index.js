import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import GoPayFeatures from '../../../components/molecules/GoPayFeatures';


class HomeGoPay extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 17, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15, }}>
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Rp 1.240.415</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
          <GoPayFeatures img={require('../../../assets/icon/pay.png')} title={'Pay'} />
          <GoPayFeatures img={require('../../../assets/icon/nearby.png')} title={'Nearby'} />
          <GoPayFeatures img={require('../../../assets/icon/topup.png')} title={'TopUp'} />
          <GoPayFeatures img={require('../../../assets/icon/more.png')} title={'More'} />
        </View>
      </View>
    )
  }
}

export default HomeGoPay