
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* container */}
        <ScrollView style={{flex: 1,backgroundColor: 'white'}}>
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
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Rp 1.240.415</Text>
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
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom: 18}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-ride.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-car.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-bluebird.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-send.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom: 18}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-deals.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-food.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/icon/go-more.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
              </View>
            </View>
          </View>
          {/* section */}
          <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} ></View>
          {/* news section */}
          <View style={{paddingTop: 17, paddingHorizontal: 17}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/dummy/sepak-bola.jpg')} style={{height: 200, width: '100%',borderRadius: 6}} />
              <View style={{width: '100%',height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.3, borderRadius: 6 }}></View>
              <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20,borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, color:'#1C1C1C', fontWeight: 'bold'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, color:'#7A7A7A',marginBottom: 10}}>Egi Maulana Vikri, Bersaing Mendapatkan Tempat Utama di Lechia Gdansk</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* gofood banner section */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%',borderRadius: 6}} />
              <View style={{width: '100%',height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View style={{flex: 1, paddingLeft: 12}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5}}>Free GO-FOOD Voucher</Text>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>Quick, before they run out!</Text>
                </View>
                <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center', alignSelf: 'stretch'}}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, paddingBottom: 16}}></View>
          </View>
        </ScrollView>
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
