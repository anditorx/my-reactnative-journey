import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'



const SearchFeatures = (props) => {
  return (
    <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
      <View style={{ position: 'relative', flex: 1 }}>
        <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 35, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
        <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 7, left: 10 }} />
      </View>
      <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../../assets/icon/promo.png')} style={{ height: 35 }} />
      </View>
    </View>
  )
}

export default SearchFeatures