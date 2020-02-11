import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'



const BannerSection = (props) => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ position: 'relative' }}>
        <Image source={props.imgBanner} style={{ height: 200, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
        <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }} >
          <Image source={props.imgLogo} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
          <View style={{ flex: 1, paddingLeft: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>{props.title}</Text>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>{props.desc}</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center', alignSelf: 'stretch' }}>{props.btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, paddingBottom: 16 }}></View>
    </View>
  )
}

export default BannerSection