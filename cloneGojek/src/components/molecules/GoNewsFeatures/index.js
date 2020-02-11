import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'



const GoNewsFeatures = (props) => {
  return (
    <View style={{ paddingTop: 17, paddingHorizontal: 17 }}>
      <View style={{ position: 'relative' }}>
        <Image source={props.newsImg} style={{ height: 200, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.3, borderRadius: 6 }}></View>
        <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }} >
          <Image source={props.logoImg} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
      </View>
      <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, color: '#1C1C1C', fontWeight: 'bold' }}>GO-NEWS</Text>
        <Text style={{ fontSize: 14, color: '#7A7A7A', marginBottom: 10 }}>{props.newsTitle}</Text>
        <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GoNewsFeatures