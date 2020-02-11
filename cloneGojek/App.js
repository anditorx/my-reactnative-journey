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

import GoPayFeatures from './src/components/molecules/GoPayFeatures'
import MainFeatures from './src/components/molecules/MainFeatures'
import SearchFeatures from './src/components/molecules/SearchFeatures';
import GoNewsFeatures from './src/components/molecules/GoNewsFeatures';
import InternalInfoFeatures from './src/components/molecules/InternalInfoFeatures';
import BannerSection from './src/components/molecules/BannerSection';
import ScrollableHorizontalProducts from './src/containers/organisms/ScrollableHorizontalProducts';
import HomeMainFeatures from './src/containers/organisms/HomeMainFeatures';
import NavBarIcon from './src/components/molecules/NavBarIcon';
import NavBar from './src/containers/organisms/NavBar';
import HomeGoPay from './src/containers/organisms/HomeGoPay';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* container */}
        <ScrollView style={{flex: 1,backgroundColor: 'white'}}>
          {/* search bar */}
          <SearchFeatures />
          {/* gopay features */}
          <HomeGoPay />
          {/* main feature */}
          <HomeMainFeatures />
          {/* section */}
          <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} ></View>
          {/* news section */}
          <GoNewsFeatures newsImg={require('./src/assets/dummy/sepak-bola.jpg')} logoImg={require('./src/assets/logo/white.png')} newsTitle={"Egi Maulana Vikri, Bersaing Mendapatkan Tempat Utama di Lechia Gdansk"}/>
          {/* internal information section */}
          <InternalInfoFeatures imgLogo={require('./src/assets/logo/gojek.png')} img={require('./src/assets/dummy/facebook-connect.png')} />
          {/* gofood banner section */}
          <BannerSection imgBanner={require('./src/assets/dummy/food-banner.jpg')} imgLogo={require('./src/assets/logo/white.png')} title={'Free GO-FOOD Voucher'} desc={"Quick, before they run out!"} btnText={"GET VOUCHER"}/>
          {/* nearby gofood section | horizontal scrollalble */}
          <ScrollableHorizontalProducts />
        </ScrollView>
        {/* bottom navigation */}
        <NavBar />
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
