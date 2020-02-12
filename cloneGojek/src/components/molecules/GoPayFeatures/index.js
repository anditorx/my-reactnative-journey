import React from 'react'
import { View, Image, Text } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

const GoPayFeatures = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center' }}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GoPayFeatures