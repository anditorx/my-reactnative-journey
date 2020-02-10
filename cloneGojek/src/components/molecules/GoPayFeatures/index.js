import React from 'react'
import { View, Image, Text } from 'react-native'

const GoPayFeatures = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={props.img} />
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 15 }}>{props.title}</Text>
    </View>
  )
}

export default GoPayFeatures