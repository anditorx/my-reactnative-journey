
import {Navigation} from 'react-native-navigation';
import AddDivisi from '../sreens/AddDivisi'
import HomePage from '../sreens/HomePage'

export function registerScreens(store: {}, Provider: {}) {

	Navigation.registerComponentWithRedux('HomePage', () => HomePage, Provider, store)
	Navigation.registerComponentWithRedux('AddDivisi', () => AddDivisi, Provider, store)

}


