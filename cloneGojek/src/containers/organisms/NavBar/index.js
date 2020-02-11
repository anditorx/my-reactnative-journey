import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {withNavigation} from 'react-navigation'


class NavBar extends Component {
  render() {
    return (
      <View style={{ height: 75, flexDirection: 'row', backgroundColor: 'white' }}>
        <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} icon={require('../../../assets/icon/home-active.png')} text={'Home'} active />
        <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} icon={require('../../../assets/icon/order.png')} text={'Orders'} />
        <NavBarIcon onPress={() => this.props.navigation.navigate('')} icon={require('../../../assets/icon/help.png')} text={'Help'} />
        <NavBarIcon onPress={() => this.props.navigation.navigate('')} icon={require('../../../assets/icon/inbox.png')} text={'Inbox'} />
        <NavBarIcon onPress={() => this.props.navigation.navigate('')} icon={require('../../../assets/icon/account.png')} text={'Account'} />
      </View>
    )
  }
}

export default withNavigation (NavBar)