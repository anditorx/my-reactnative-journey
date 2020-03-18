import React from 'react';
import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import {Scene, Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const AppNavigator = () =>{
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" >
					<Scene key="login" component={LoginForm} title="Please Login"/>
				</Scene>
				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						key="employeeList" 
						component={EmployeeList} 
						title="Employee List"
					/>
					<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
				</Scene>
			</Scene>
		</Router>
	);
}

export default AppNavigator