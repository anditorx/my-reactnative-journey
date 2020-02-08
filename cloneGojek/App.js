
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* container */}
        <View style={{flex: 1,backgroundColor: 'white'}}>
          {/* search bar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1,borderColor: '#E8E8E8', borderRadius: 25, height: 35, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
              <Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 7, left: 10}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/promo.png')} style={{height: 35}}/>
            </View>
          </View>
          {/* gopay features */}
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor: '#2C5FB8',borderTopLeftRadius: 5,borderTopRightRadius: 5, padding: 15,}}>
              <Image source={require('./assets/icon/gopay.png')} />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Rp 52.415</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20, paddingBottom: 14,backgroundColor: '#2F65BD', borderBottomLeftRadius: 5,borderBottomRightRadius: 5}}>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Image source={require('./assets/icon/pay.png')}/>
                <Text style={{fontSize: 14, fontWeight: 'bold',color: 'white', marginTop: 15}}>Pay</Text>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Image source={require('./assets/icon/nearby.png')}/>
                <Text style={{fontSize: 14, fontWeight: 'bold',color: 'white', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Image source={require('./assets/icon/topup.png')}/>
                <Text style={{fontSize: 14, fontWeight: 'bold',color: 'white', marginTop: 15}}>TopUp</Text>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Image source={require('./assets/icon/more.png')}/>
                <Text style={{fontSize: 14, fontWeight: 'bold',color: 'white', marginTop: 15}}>More</Text>
              </View>
            </View>
          </View>
        </View>
        {/* bottom navigation */}
        <View style={{height: 75, flexDirection:'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./assets/icon/home-active.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./assets/icon/order.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./assets/icon/help.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./assets/icon/inbox.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./assets/icon/account.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  welcome : {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
