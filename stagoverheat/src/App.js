import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Actions, Scene, Router, Switch, Modal } from 'react-native-router-flux';
import About from './components/screens/About';
import Question from './components/screens/Question';
import QuestionDetail from './components/screens/QuestionDetail';


class TabIcon extends Component {
  render(){
    const title = this.props.title;
    return(
      <Text>{title}</Text>
    );
  };
}

class App extends Component {

  componentWillMount() {
    this.scenes = Actions.create(
      <Scene key="root" tabs={true} hideTabBar={true}>
        <Scene key="menus" hideNavBar={true}>
          <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor:'#f7f7f7'}} >
            <Scene key="Questions" component={Question} title="Questions" icon={TabIcon} hideNavBar={true} />
            <Scene key="About" component={About} title="About" icon={TabIcon} hideNavBar={true} />
          </Scene>
          <Scene key="QuestionDetail" component={QuestionDetail} title="Question Detail" hideNavBar={true} />
        </Scene>
      </Scene>
    );
  }

  render() {
    return <Router scenes={this.scenes} />
  }
}



export default App;