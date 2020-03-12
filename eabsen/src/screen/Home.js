import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	StatusBar,
	Image,
	TouchableOpacity
} from 'react-native';
import {
	Container,
	Header,
	Tab,
	Tabs,
	ScrollableTab,
	List,
	ListItem,
	Thumbnail,
	Text,
	Left,
	Body,
	Right,
	Button,
	TabHeading,
	Icon,
}
from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Head from '../component/Head'

function Home({navigation})  {

	return (

		<SafeAreaView style={{ flex: 1, }}>
			<ScrollView style={{ flexGrow: 1 }}>
				<View style={styles.container}>
					{/* head section */}
					<Head/>
					{/* absen section */}
					<View style={{ position: 'relative', marginHorizontal: 17, marginTop: 20, }}>
						<Image source={require('../assets/img/card_black1.jpg')} style={{ height: 200, width: '100%', borderRadius: 6 }} />
						<View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.3, borderRadius: 6 }}></View>
						<View style={{ height: 100, width: '100%', position: 'absolute', top: 16, left: 16 }} >
							<Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>Ariel Tatum</Text>
							<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>Sales Promotion - Cikarang</Text>
							<Text style={{ fontSize: 15, color: 'white', marginBottom: 5 }}>CKR001</Text>
						</View>
						<View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
							<View style={{ flex: 1, paddingLeft: 12 }}>
								<Text style={{ fontSize: 13, color: 'white', marginBottom: 0 }}>Masuk : </Text>
								<Text style={{ fontSize: 12, color: 'white' }}>08:22 AM</Text>
							</View>
							<TouchableOpacity style={{ backgroundColor: '#e74c3c', paddingHorizontal: 12, paddingVertical: 11, width: 150, alignSelf: 'flex-end', borderRadius: 4 }}>
								<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center', alignSelf: 'stretch' }}>Absen Pulang</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* info section */}
					<View style={{ height: 3, width: '100%', backgroundColor: '#dfe6e9', marginTop: 20, }}></View>
					{/* fyi section */}
					<TouchableOpacity style={{ flexDirection: 'column', marginHorizontal: 17, marginTop: 20, }}>
						<Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10 }}>Fyi : </Text>
						<Image source={require('../assets/img/banner_product_knowledge_black1.png')} style={{ width: '100%', height: 100 }} resizeMode="stretch" />
					</TouchableOpacity>

					{/* info section */}
					<View style={{ height: 3, width: '100%', backgroundColor: '#dfe6e9', marginTop: 20, }}></View>

					{/* main menu section */}
					<View style={{ flex: 1 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 17, marginTop: 20, }}>
							<TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} onPress={()=> navigation.navigate('Laporan')}>
								<Image source={require('../assets/img/active_option.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Laporan</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
								<Image source={require('../assets/img/apps.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Stock Card</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 17, marginTop: 20, }}>
							<TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
								<Image source={require('../assets/img/events.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Program</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
								<Image source={require('../assets/img/app_instalation.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sell Out</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 17, marginTop: 20, }}>
							<TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
								<Image source={require('../assets/img/message_sent.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Upload Absen</Text>
							</TouchableOpacity>
							{/* <TouchableOpacity style={{ flexDirection: 'column', width: 160, height: 160, borderColor: '#ced6e0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
								<Image source={require('../assets/img/app_instalation.jpg')} style={{ width: 120, height: 120 }}  />
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sell Out</Text>
							</TouchableOpacity> */}
						</View>
					</View>

					{/* separate */}
					<View style={{ height: 3, width: '100%', backgroundColor: '#dfe6e9', marginTop: 20, }}></View>

					{/* tabs */}
					<Tabs style={{marginHorizontal: 17,}}>
						<Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Text style={{color: 'black'}}>Laporan List</Text></TabHeading>}>
							<View style={{ marginHorizontal: 17, backgroundColor: 'white', marginTop: 20, }}>
								<List>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/absen.jpg')} />
										</Left>
										<Body>
											<Text>Mar 02 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 08:28</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/worktime.jpg')} />
										</Left>
										<Body>
											<Text>Mar 03 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 09:43</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/team.jpg')} />
										</Left>
										<Body>
											<Text>Mar 04 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 11:21</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/task.jpg')} />
										</Left>
										<Body>
											<Text>Mar 05 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 10:12</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/spreadsheets.jpg')} />
										</Left>
										<Body>
											<Text>Mar 06 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 09:57</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
								</List>
							</View >
						</Tab>
						<Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Text style={{color: 'black'}}>Stock Card List</Text></TabHeading>}>
							<View style={{ marginHorizontal: 17, backgroundColor: 'white', marginTop: 20, }}>
								<List>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/absen.jpg')} />
										</Left>
										<Body>
											<Text>Mar 02 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 08:28</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/worktime.jpg')} />
										</Left>
										<Body>
											<Text>Mar 03 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 09:43</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/team.jpg')} />
										</Left>
										<Body>
											<Text>Mar 04 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 11:21</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/task.jpg')} />
										</Left>
										<Body>
											<Text>Mar 05 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 10:12</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={require('../assets/img/spreadsheets.jpg')} />
										</Left>
										<Body>
											<Text>Mar 06 2020</Text>
											<Text note numberOfLines={1}>Masuk Pukul 09:57</Text>
										</Body>
										<Right>
											<Button transparent>
												<Text>View</Text>
											</Button>
										</Right>
									</ListItem>
								</List>
							</View >
						</Tab>
					</Tabs>
					{/* separate */}
					<View style={{ height: 3, width: '100%', backgroundColor: '#dfe6e9', marginTop: 20, }}></View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {

		backgroundColor: 'white',
		height: '100%',
		width: '100%',
		flex: 1
	},

});

export default Home;
