import React, { Component } from 'react';
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
import BannerSection from '../../../components/molecules/BannerSection';
import GoNewsFeatures from '../../../components/molecules/GoNewsFeatures';
import InternalInfoFeatures from '../../../components/molecules/InternalInfoFeatures';
import SearchFeatures from '../../../components/molecules/SearchFeatures';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';
import HomeMainFeatures from '../../../containers/organisms/HomeMainFeatures';
import NavBar from '../../../containers/organisms/NavBar';
import ScrollableHorizontalProducts from '../../../containers/organisms/ScrollableHorizontalProducts';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchFeatures />
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <HomeGoPay />
          <HomeMainFeatures />
          <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }} ></View>
          <GoNewsFeatures 
            newsImg={require('../../../assets/dummy/sepak-bola.jpg')} 
            logoImg={require('../../../assets/logo/white.png')} 
            newsTitle={"Egi Maulana Vikri, Bersaing Mendapatkan Tempat Utama di Lechia Gdansk"} 
            onPress={() => this.props.navigation.navigate('NewsDetail')} 
          />
          <InternalInfoFeatures 
            imgLogo={require('../../../assets/logo/gojek.png')} 
            img={require('../../../assets/dummy/facebook-connect.png')} 
          />
          <BannerSection 
            imgBanner={require('../../../assets/dummy/food-banner.jpg')} 
            imgLogo={require('../../../assets/logo/white.png')} 
            title={'Free GO-FOOD Voucher'} 
            desc={"Quick, before they run out!"} 
            btnText={"GET VOUCHER"} 
          />
          <ScrollableHorizontalProducts />
        </ScrollView>
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