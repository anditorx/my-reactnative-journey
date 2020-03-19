import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Card, CardItem } from 'native-base';

export default class Card extends Component {
	render() {
		return (
			<Card>
				<CardItem>
					<Body>
						<Text>
						//Your text here
						</Text>
					</Body>
				</CardItem>
			</Card>
		)
	}
}
