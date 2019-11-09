import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {

  state = {
    loggedIn: null,
  };

  componentDidMount(){
    const config = {
      apiKey: "AIzaSyDjxKnP4CJpFaX3DiVEIepe68ybamzR3HY",
      authDomain: "react-auth-01-f9635.firebaseapp.com",
      databaseURL: "https://react-auth-01-f9635.firebaseio.com",
      projectId: "react-auth-01-f9635",
      storageBucket: "react-auth-01-f9635.appspot.com",
      messagingSenderId: "824580905824",
      appId: "1:824580905824:web:9f1b501e3096560e7fdc05",
      measurementId: "G-HTS6EZRH83"
    }

    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <Button onPress={()=> firebase.auth().signOut()}>Logout</Button>
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size={"large"}/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText = {"Authentication"}/>
        <View style={{height:50}}/>
        {this.renderContent()}
      </View>
    )
  }
}
