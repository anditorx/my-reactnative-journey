import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

const NavBarIcon = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={{ width: 30, height: 30 }} source={props.icon} />
        <Text style={{ fontSize: 12, marginTop: 5, color: props.active ? '#43AB4A' : 'grey'}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBarIcon