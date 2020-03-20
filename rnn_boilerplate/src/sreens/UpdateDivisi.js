import React, { Component} from 'react';
import {Platform, View, ToastAndroid, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Text,Left,Right,Title,Body} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import {Navigation} from 'react-native-navigation'
import Toast, {DURATION} from 'react-native-easy-toast'
import { setRoot } from '../config/ControllScreen';

import { inject, observer } from 'mobx-react';
@inject("AuthStore") @observer
export default class UpdateDivisi extends Component {

	constructor(props) {
		super(props)
		console.log(props);
		this.state = {
			 data: props.text,
			 dataDivisi: '',
			 id: '',
			 divisi_name: '',
       note: ''
			 
		};
	};

	async componentDidMount() {
		const data = {
			id: this.state.data
		}
    const response = await this.props.AuthStore.getDivisiWithId(data);
    this.setState({
			id: response.result[0].id,
			divisi_name: response.result[0].divisi_name,
			note : response.result[0].note
		})
		console.log(this.state.dataDivisi);
  }
	

  handleDivisiNameInput = (text) => {
    this.setState({ divisi_name: text })
  }
  handleNoteInput = (text) => {
    this.setState({ note: text })
  }

  _renderButtonClick = async ()=> {

    const id = this.state.id;
    const divisi_name_input = this.state.divisi_name;
		const note_input = this.state.note;
		console.log('Divisi name : '+divisi_name_input);
    if (divisi_name_input == '') {
      
    } else {
      const data = {
				id : id,
        divisi_name: divisi_name_input,
        note: note_input,
      }
      const response = await this.props.AuthStore.putDivisi(data);
      if (response.result.status == 200) {
        Alert.alert(
          'Success',
          'Succesfully update divisi',
          [
            {text: 'OK', onPress: () => setRoot('HomePage')},
          ],
          {cancelable: false},
        );
        
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
            <Title>Update Divisi</Title>
          </Body>
					<Right></Right>
        </Header>
        <Content>
          <Form style={{marginHorizontal: 15}}>
            <Item floatingLabel>
              <Label>Divisi</Label>
              <Input 
								value={this.state.divisi_name}
								onChangeText={this.handleDivisiNameInput} 
              />
            </Item>
            <Item floatingLabel>
              <Label>Keterangan</Label>
							<Input 
								value={this.state.note}
								onChangeText={this.handleNoteInput} 
              />
            </Item>
            
            <Button 
              block style={{marginTop: 50}}
              onPress={ ()=> this._renderButtonClick() }
            >
							<Text>Submit</Text>
						</Button>
          </Form>
          
        </Content>
      </Container>
    );
  }
}