import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import {Card,CardSection,Input,Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'

class EmployeeCreate extends Component {

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Input your name"
						value={this.props.name}
						onChangeText={ value => this.props.employeeUpdate({prop: 'name', value})}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="081188880000"
						value={this.props.phone}
						onChangeText={ value => this.props.employeeUpdate({prop: 'phone', value})}
					/>
				</CardSection>
				<CardSection >
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						style={{flex: 1, marginLeft: 15}}
						selectedValue={this.props.shift}
						onValueChange={value =>this.props.employeeUpdate({prop: 'shift', value})}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
				<CardSection style={{flexDirection: 'column'}}>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}
const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20,
		marginRight: 10,
	}
}
const mapStateToProps = (state) => {
	const {name, phone,shift} = state.employeeForm;
	return {name,phone,shift}; 
}

export default connect(mapStateToProps,{employeeUpdate}) (EmployeeCreate);