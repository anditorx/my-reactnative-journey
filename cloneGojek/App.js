
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* container */}
        <View style={{flex: 1,backgroundColor: 'pink'}}>
          <Text>Test</Text>

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
