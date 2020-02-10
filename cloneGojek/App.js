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

const GoPayFeatures = (props) => {
  return(
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
      <Image source={props.img}/>
      <Text style={{fontSize: 14, fontWeight: 'bold',color: 'white', marginTop: 15}}>{props.title}</Text>
    </View>
  )
}

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
              <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top: 7, left: 10}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./src/assets/icon/promo.png')} style={{height: 35}}/>
            </View>
          </View>
          {/* gopay features */}
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor: '#2C5FB8',borderTopLeftRadius: 5,borderTopRightRadius: 5, padding: 15,}}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Rp 1.240.415</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20, paddingBottom: 14,backgroundColor: '#2F65BD', borderBottomLeftRadius: 5,borderBottomRightRadius: 5}}>
              <GoPayFeatures img={require('./src/assets/icon/pay.png')} title={'Pay'} />
              <GoPayFeatures img={require('./src/assets/icon/nearby.png')} title={'Nearby'} />
              <GoPayFeatures img={require('./src/assets/icon/topup.png')} title={'TopUp'} />
              <GoPayFeatures img={require('./src/assets/icon/more.png')} title={'More'} />
            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom: 18}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-ride.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-car.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-bluebird.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-send.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', marginBottom: 18}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-deals.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-food.png')} />
                </View>
                <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}} >
                <View style={{width: 60, height: 60, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-more.png')} />
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
              <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{height: 200, width: '100%',borderRadius: 6}} />
              <View style={{width: '100%',height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.3, borderRadius: 6 }}></View>
              <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./src/assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
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
          {/* internal information section */}
          <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{height: 15, width: 60, marginLeft: -4}} >
              <Image source={require('./src/assets/logo/gojek.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection: "row", marginBottom: 16}}>
              <View>
                <Image source={require('./src/assets/dummy/facebook-connect.png')} />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>Connect with Facebook</Text>
                <Text style={{fontSize: 14, color: '#4A4A4A', width: '60%'}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, paddingBottom: 16}}></View>
          </View>
          {/* gofood banner section */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%',borderRadius: 6}} />
              <View style={{width: '100%',height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./src/assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
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
          {/* nearby gofood section | horizontal scrollalble */}
          <View style={{}}>
            <View style={{height: 15, width: 60, marginLeft: 16}} >
              <Image source={require('./src/assets/logo/go-food.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Nearby Restaurants</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
            </View>
            <ScrollView horizontal={true} style={{flexDirection: 'row', paddingLeft: 16, marginBottom: 20}}>
              <View style={{marginRight: 10}}>
                <View style={{width: 150, height: 150, borderRadius: 5}}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 12}}>KFC AEON Mall</Text>
              </View>
              <View style={{marginRight: 10}}>
                <View style={{width: 150, height: 150, borderRadius: 5}}>
                  <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 12}}>Bakmi GM AEON Mall</Text>
              </View>
              <View style={{marginRight: 10}}>
                <View style={{width: 150, height: 150, borderRadius: 5}}>
                  <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 12}}>Martabak Orins </Text>
              </View>
              <View style={{marginRight: 10}}>
                <View style={{width: 150, height: 150, borderRadius: 5}}>
                  <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 12}}>Martabak Banka</Text>
              </View>
              <View style={{marginRight: 10}}>
                <View style={{width: 150, height: 150, borderRadius: 5}}>
                  <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 12}}>Ayam Bakar Pak Boss</Text>
              </View>

            </ScrollView>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginHorizontal: 16}}></View>
          </View>
        </ScrollView>
        {/* bottom navigation */}
        <View style={{height: 75, flexDirection:'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./src/assets/icon/home-active.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./src/assets/icon/order.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./src/assets/icon/help.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./src/assets/icon/inbox.png')} />
            <Text style={{fontSize: 12, color:'grey', marginTop: 5}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('./src/assets/icon/account.png')} />
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
