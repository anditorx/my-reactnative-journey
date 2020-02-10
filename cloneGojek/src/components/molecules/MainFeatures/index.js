import React from 'react'
import { View, Image, Text } from 'react-native'



const MainFeatures = (props) => {
  return (
    <View style={{ width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18 }} >
      <View style={{ width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={props.img} />
      </View>
      <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>{props.title}</Text>
    </View>
  )
}

export default MainFeatures