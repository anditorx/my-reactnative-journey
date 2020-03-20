import React, { Component} from 'react';
import {Platform, View, ToastAndroid, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Text,Left,Right,Title,Body} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import {Navigation} from 'react-native-navigation'
import Toast, {DURATION} from 'react-native-easy-toast'
import { setRoot } from '../config/ControllScreen';

import { inject, observer } from 'mobx-react';
@inject("AuthStore") @observer
export default class AddDivisi extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       divisi_name: '',
       note: ''
    };
  };

  

  handleDivisiNameInput = (text) => {
    this.setState({ divisi_name: text })
  }
  handleNoteInput = (text) => {
    this.setState({ note: text })
  }

  _renderClick = async ()=> {

    const divisi_name_input = this.state.divisi_name;
    const note_input = this.state.note;
    if (divisi_name_input == '') {
      
    } else {
      const data = {
        divisi_name: divisi_name_input,
        note: note_input,
      }
      const response = await this.props.AuthStore.postDivisi(data);
      if (response.result.status == 200) {
        Alert.alert(
          'Success',
          'Succesfully add divisi',
          [
            {text: 'OK', onPress: () => setRoot('HomePage')},
          ],
          {cancelable: false},
        );
        this.setState({
          divisi_name: '',
          note: '',
        });
      } else {
        () => showToast()
      }
    }

    
    console.log(divisi_name_input);
    console.log(note_input);
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> Navigation.pop(this.props.componentId)}>
              <Icon name="arrowleft" style={{fontSize: 25, color: Platform.OS == 'android' ? 'white' : 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title>Create Divisi</Title>
          </Body>
					<Right></Right>
        </Header>
        <Content>
          <Form style={{marginHorizontal: 15}}>
            <Item floatingLabel>
              <Label>Divisi</Label>
              <Input 
                onChangeText={this.handleDivisiNameInput} 
                value={this.state.divisi_name}
              />
            </Item>
            <Item floatingLabel>
              <Label>Keterangan</Label>
              <Input 
                onChangeText={this.handleNoteInput} 
                value={this.state.note}
              />
            </Item>
            
            <Button 
              block style={{marginTop: 50}}
              onPress={ ()=> this._renderClick() }
            >
							<Text>Submit</Text>
						</Button>
          </Form>
          
        </Content>
      </Container>
    );
  }
}