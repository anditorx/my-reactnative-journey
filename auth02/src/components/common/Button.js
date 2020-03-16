import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({onPress,children}) => {
	const {buttonStyle,textStyle} = styles;
	return (
		<TouchableOpacity 
			style={buttonStyle}
			onPress={onPress}
		>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = {
  buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#ffff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 15,
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10,
	}
}

export default Button
