import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentDidMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyAunofrQheVxySyU0cYhaLqaiFnY2JNML8',
      authDomain: 'manager-b039a.firebaseapp.com',
      databaseURL: 'https://manager-b039a.firebaseio.com',
      projectId: 'manager-b039a',
      storageBucket: 'manager-b039a.appspot.com',
      messagingSenderId: '405438542794',
      appId: '1:405438542794:web:76dd8cb931edc475909533'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    )
  }
}


export default App;