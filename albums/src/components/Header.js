// import library for making a component
import React from 'react'
import { Text, View } from 'react-native'

// make a component
const Header = () => {

  const {textStyle,viewStyle} = styles;

  return (
    <View style = {viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle : {
    backgroundColor: '#F8F8',
    height : 50,
  },
  textStyle : {
    fontSize: 25,
  }
}
// make the component available to other parts of the app
export default Header;