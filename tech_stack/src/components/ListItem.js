import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    console.log(this.props);
    
    if (library.id == selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;    

    return (
      <TouchableWithoutFeedback
        onPress={ () => this.props.selectLibrary(id) }
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps =  (state, ownProps) => {
  return { selectedLibraryId: state.selectedLibraryId }
}

const styles = {
  titleStyle:{
    fontSize: 25,
    paddingLeft: 15,
  }
}


export default connect(mapStateToProps,actions)(ListItem);