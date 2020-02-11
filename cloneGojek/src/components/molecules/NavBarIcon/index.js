import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'

const NavBarIcon = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 30, height: 30 }} source={props.icon} />
      <Text style={{ fontSize: 12, marginTop: 5, color: props.active ? '#43AB4A' : 'grey'}}>{props.text}</Text>
    </View>
  )
}

export default NavBarIcon