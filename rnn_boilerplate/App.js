import {Platform, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './src/config/RegisterScreen';
import {setRoot} from './src/config/ControllScreen'

// import Provider from './src/utils/MobxRnnProvider';
// import Stores from './src/stores'
// import AuthStore from './src/stores/auth'

registerScreens(null, null);
Text.allowFontScaling = false
console.disableYellowBox = true;

Navigation.events().registerAppLaunchedListener(async () => {

  setRoot('HomePage')
    
});
