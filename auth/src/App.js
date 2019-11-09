import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {

  // componentDidMount(){
  //   const config = {
  //     apiKey: "AIzaSyDjxKnP4CJpFaX3DiVEIepe68ybamzR3HY",
  //     authDomain: "react-auth-01-f9635.firebaseapp.com",
  //     databaseURL: "https://react-auth-01-f9635.firebaseio.com",
  //     projectId: "react-auth-01-f9635",
  //     storageBucket: "react-auth-01-f9635.appspot.com",
  //     messagingSenderId: "824580905824",
  //     appId: "1:824580905824:web:9f1b501e3096560e7fdc05",
  //     measurementId: "G-HTS6EZRH83"
  //   }

  //   firebase.initializeApp(config);
    
  // }

  render() {
    return (
      <View>
        <Header headerText = {"Authentication"} />
        <LoginForm  />
      </View>
    )
  }
}
