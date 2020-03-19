
import {Navigation} from 'react-native-navigation';
import AddJabatan from '../sreens/AddJabatan'
import HomePage from '../sreens/HomePage'

export function registerScreens(store: {}, Provider: {}) {

	Navigation.registerComponentWithRedux('HomePage', () => HomePage, Provider, store)
	Navigation.registerComponentWithRedux('AddJabatan', () => AddJabatan, Provider, store)

}


