import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon';


class NavBar extends Component {
  render() {
    return (
      <View style={{ height: 75, flexDirection: 'row', backgroundColor: 'white' }}>
        <NavBarIcon icon={require('../../../assets/icon/home-active.png')} text={'Home'} active />
        <NavBarIcon icon={require('../../../assets/icon/order.png')} text={'Orders'} />
        <NavBarIcon icon={require('../../../assets/icon/help.png')} text={'Help'} />
        <NavBarIcon icon={require('../../../assets/icon/inbox.png')} text={'Inbox'} />
        <NavBarIcon icon={require('../../../assets/icon/account.png')} text={'Account'} />
      </View>
    )
  }
}

export default NavBar