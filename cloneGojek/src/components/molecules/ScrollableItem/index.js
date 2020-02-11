import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'



const ScrollableItem = (props) => {
  return (
    <View style={{ marginRight: 10 }}>
      <View style={{ width: 150, height: 150, borderRadius: 5 }}>
        <Image source={props.img} style={{ height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5 }} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 12 , alignSelf: 'center', justifyContent: 'center', marginRight: 20}}>{props.menuItem}</Text>
    </View>
  )
}

export default ScrollableItem