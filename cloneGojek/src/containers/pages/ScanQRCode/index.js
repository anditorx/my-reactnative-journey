import React from 'react'
import { Text, View, Button } from 'react-native'

const IconWtihText = (props) => {
  return(
    <View>
      <View style={{width: 60,height: 60,backgroundColor: '#61A756',borderRadius: 60}}/>
      <Text style={{maxWidth: 70,textAlign: 'center',marginTop: 10}}>{props.title}</Text>
    </View>
  )
}

const IconAction = () => {
  return(
    <View style={{width: 35,height: 35,backgroundColor: 'white',borderRadius: 35}}/>
  )
}

const ScanQRCode = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1,backgroundColor: 'grey'}}>
        <View style={{flexDirection: 'row',paddingHorizontal: 16,marginTop: 16,justifyContent: 'space-between'}}>
          <IconAction />
          <View style={{flexDirection: 'row', justifyContent: 'space-between',width: 80}}>
            <IconAction />
            <IconAction />
          </View>
        </View>
      </View>
      <View style={{height: 300,backgroundColor: 'white', paddingHorizontal: 16}}>
        <View style={{alignItems: 'center',marginTop: 8,marginBottom: 18}}>
          <View style={{width: 50,height: 3,backgroundColor: '#E0E0E0',marginVertical: 1}}/>
          <View style={{width: 50,height: 3,backgroundColor: '#E0E0E0',marginVertical: 1}}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>More Option</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#61A756'}}>Shortcut</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'flex-start',marginTop: 14,width: '100%'}}>
          <View style={{flexDirection : 'row', alignItems: 'flex-start',width: 190,justifyContent: 'space-between',paddingRight: 12}}>
            <IconWtihText title="Phone Number" />
            <IconWtihText title="GoPay Code" />
          </View>
          <View style={{width: 1, height: 60,backgroundColor: 'grey'}} />
          <View style={{flex: 1,paddingLeft: 12}}>
            <Text>You recent GoPay receivers will show here. No admin fee.</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ScanQRCode;