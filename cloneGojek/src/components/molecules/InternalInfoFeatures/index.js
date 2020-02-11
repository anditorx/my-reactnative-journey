import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'



const InternalInfoFeatures = (props) => {
  return (
    <View style={{ padding: 16, paddingBottom: 0 }}>
      <View style={{ height: 15, width: 60, marginLeft: -4 }} >
        <Image source={props.imgLogo} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
      </View>
      <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
      <View style={{ flexDirection: "row", marginBottom: 16 }}>
        <View>
          <Image source={props.img} />
        </View>
        <View style={{ marginLeft: 16, flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect with Facebook</Text>
          <Text style={{ fontSize: 14, color: '#4A4A4A', width: '60%' }}>Login faster without verification code</Text>
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, paddingBottom: 16 }}></View>
    </View>
  )
}

export default InternalInfoFeatures