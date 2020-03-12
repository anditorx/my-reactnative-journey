import React, { Component } from 'react'
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

export default class componentName extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//defauilt value of the date time
			date: '',
		};
	}

	componentDidMount() {
		var that = this;
		var currentDate = new Date();

		that.setState({
			//Setting the value of the date time
			date:
				// date + ' ' + month + ' ' + year + ' | ' + hours + ':' + min + ':' + sec,
				currentDate.toDateString()
		});
	}

	render() {
		return (
			<View style={{ flexDirection: 'row', marginHorizontal: 17, marginTop: 10, justifyContent: 'space-between', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 10 }}>
						<View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
							<Text style={{ fontSize: 12 }}>{this.state.date}</Text>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 17 }}></Text>
								<Text style={{ fontSize: 17, fontWeight: 'bold' }}>SPOTCHECK SPG</Text>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 12 }}>Powered by</Text>
								<Text style={{ fontSize: 12, fontWeight: 'bold' }}> Permata Indonesia</Text>
							</View>
						</View>
						<TouchableOpacity>
							<Image source={require('../assets/img/photo_profile.jpg')} style={{ width: 40, height: 40, borderRadius: 100 }} />
						</TouchableOpacity>
					</View>
		)
	}
}