import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    )
  }
}


export default App;