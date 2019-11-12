import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback,LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    // console.log(this.props);
    
    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex:1}}>
            {library.description}
          </Text>
        </CardSection>
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
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

const styles = {
  titleStyle:{
    fontSize: 25,
    paddingLeft: 15,
  }
}


export default connect(mapStateToProps,actions)(ListItem);