import React from 'react';
import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList'

// const AppNavigator = createStackNavigator(
//   {
// 		Login: LoginForm,
// 		List: EmployeeList,
// 	},
// 	{
//     initialRouteName: 'Login',
//   }
// );

// export default createAppContainer(AppNavigator);
const AppNavigator = () =>{
	return (
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login"/>
				<Scene key="employeeList" component={EmployeeList} title="Employee List"/>
			</Scene>
		</Router>
	);
}

export default AppNavigator